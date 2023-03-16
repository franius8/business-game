import React, {useEffect} from 'react'
import './AuctionModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";
import {PlayerInterface} from "../../d";

export default function AuctionModal (props: {modalVisible: boolean, closeModal: () => void,
players: PlayerInterface[], auctionId: string}) {
  const [auctionPrice, setAuctionPrice] = React.useState(0);
  const [highestBidder, setHighestBidder] = React.useState<PlayerInterface | null>(null);
  const [auctionPlayer, setAuctionPlayer] = React.useState(props.players[0]);
  const [passCount, setPassCount] = React.useState(0);
  const [auctionEnded, setAuctionEnded] = React.useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/auctionHandling/getPlayer/${props.auctionId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            setAuctionPlayer(data);
        })
  }, []);

  const changeAuctionPlayer = () => {
    if (!((passCount === props.players.length && !highestBidder) && passCount === props.players.length - 1)) {
        const index = props.players.indexOf(auctionPlayer);
        const newIndex = index === props.players.length - 1 ? 0 : index + 1;
        setAuctionPlayer(props.players[newIndex])
        fetch(`http://localhost:3001/auctionHandling/changePlayer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auctionId: props.auctionId,
                playerIndex: newIndex
            })
        })
    } else {
      setAuctionEnded(true);
    }
  }

  const increasePrice = (increase: number) => {
    if (auctionPrice + increase > auctionPlayer.money) {
      setPassCount(passCount + 1);
      changeAuctionPlayer();
      return;
    } else if (increase === 0) {
      setPassCount(passCount + 1);
      changeAuctionPlayer();
      return;
    } else {
        setPassCount(0);
        setHighestBidder(auctionPlayer);
        setAuctionPrice(auctionPrice + increase);
        fetch(`http://localhost:3001/auctionHandling/increasePrice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auctionId: props.auctionId,
                highestBidder: auctionPlayer,
                increase: increase
            })
        })
        return;
    }
  }

  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={() => {}}>
              <div className={"auction-modal"}>
                <h2>Auction</h2>
                <div className={"auction-info-div"}>
                  <div className={"auction-price-div"}>
                    <p>Current price:</p>
                    <p>${auctionPrice}</p>
                  </div>
                  <div className={"highest-bidder-div"}>
                    <p>Highest bidder:</p>
                    <p>{highestBidder?.name || "none"}</p>
                  </div>
                </div>
                {!auctionEnded ?
                    <div className={"bidding-div"}>
                      <p>Current bidder: <b>{auctionPlayer?.name || "none"}</b></p>
                      <div className={"auction-modal-button-container"}>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(10)}>+$10</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(20)}>+$20</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(50)}>+$50</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(100)}>+$100</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(0)}>Pass</div>
                      </div>
                    </div>
                    :
                    <div className={"auction-finished-div"}>
                      {highestBidder ?
                          <p>Property sold to {highestBidder!.name} for {auctionPrice}</p>
                        :
                          <p>Property unsold</p>
                       }
                      <button onClick={props.closeModal}>Close</button>
                    </div>
                }
              </div>
            </Modal>}
    </AnimatePresence>
  )
}

