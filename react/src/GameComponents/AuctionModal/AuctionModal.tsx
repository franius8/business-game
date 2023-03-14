import React, {useEffect} from 'react'
import './AuctionModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";
import {PlayerInterface} from "../../d";

export default function AuctionModal (props: {modalVisible: boolean, closeModal: () => void, heading: string, text: string,
setAuctionPrice: (price: number) => void, setAuctionPlayer: (player: PlayerInterface) => void, players: PlayerInterface[]}) {
  const [auctionPrice, setAuctionPrice] = React.useState(10);
  const [highestBidder, setHighestBidder] = React.useState<PlayerInterface | null>(null);
  const [auctionPlayer, setAuctionPlayer] = React.useState(props.players[0]);
  const [passCount, setPassCount] = React.useState(0);
  const [auctionEnded, setAuctionEnded] = React.useState(false);

  useEffect(() => {
    console.log(auctionPlayer);
  }, []);

  const changeAuctionPlayer = () => {
    if (!((passCount === props.players.length && !highestBidder) || passCount === props.players.length - 1)) {
      let index = props.players.indexOf(auctionPlayer);
      if (index === props.players.length - 1) {
        setAuctionPlayer(props.players[0]);
      } else {
        setAuctionPlayer(props.players[index + 1]);
      }
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
        setAuctionPrice(auctionPrice + increase);
        setHighestBidder(auctionPlayer);
        changeAuctionPlayer();
        return;
    }
  }

  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={() => {}}>
              <div className={"auction-modal"}>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
                <div className={"auction-info-div"}>
                  <p>Current price: ${auctionPrice}</p>
                  <p>Highest bidder: {highestBidder ? highestBidder.name : "none"}</p>
                </div>
                {!auctionEnded ?
                    <div className={"bidding-div"}>
                      <p>Current bidder: {"test" || "none"}</p>
                      <div className={"auction-modal-button-container"}>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(10)}>+$10</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(20)}>+$20</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(50)}>+$50</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(100)}>+$100</div>
                        <div className={"auction-modal-button"} onClick={() => increasePrice(0)}>Pass</div>
                      </div>
                    </div>
                    :
                    highestBidder ?
                        <p>Property sold to {highestBidder!.name} for {auctionPrice}</p>
                        :
                        <p>Property unsold</p>
                }
              </div>
            </Modal>}
    </AnimatePresence>
  )
}

