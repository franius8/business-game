import React from 'react'
import './CurrentPlayerModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";

export default function CurrentPlayerModal (props: {modalVisible: boolean, closeModal: () => void, playerName: string}) {
  return (
    <AnimatePresence>
        {props.modalVisible && (
            <Modal close={props.closeModal}>
                <p>{props.playerName} turn</p>
            </Modal>)}
    </AnimatePresence>
  )
}

