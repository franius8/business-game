import React from 'react'
import './BuyModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";

export default function BuyModal (props: {modalVisible: boolean, closeModal: () => void, heading: string, text: string,
 auction: () => void, buy: () => void}) {
  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={() => {}}>
              <div className={"buy-modal"}>
                  <h2>{props.heading}</h2>
                  <p>{props.text}</p>
                  <div className={"buy-modal-button-container"}>
                    <button className={"buy-modal-button"} onClick={props.auction}>Auction</button>
                    <button className={"buy-modal-button"} onClick={props.buy}>Buy</button>
                  </div>
              </div>
            </Modal>}
    </AnimatePresence>
  )
}

