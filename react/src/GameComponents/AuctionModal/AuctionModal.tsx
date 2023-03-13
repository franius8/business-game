import React from 'react'
import './AuctionModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";
import {PlayerInterface} from "../../d";

export default function AuctionModal (props: {modalVisible: boolean, closeModal: () => void, heading: string, text: string,
setAuctionPrice: (price: number) => void, setAuctionPlayer: (player: PlayerInterface) => void, players: PlayerInterface[]}) {
  const [auctionPrice, setAuctionPrice] = React.useState(10);
  const [highestBidder, setHighestBidder] = React.useState(null);
  const [auctionPlayer, setAuctionPlayer] = React.useState(props.players[0]);

  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={() => {}}>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
              <div className={"auction-info-div"}>
                <p>Current price: ${auctionPrice}</p>
                <p>Highest bidder: {highestBidder ? highestBidder : "none"}</p>
              </div>
            </Modal>}
    </AnimatePresence>
  )
}

