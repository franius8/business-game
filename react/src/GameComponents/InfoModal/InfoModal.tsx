import React from 'react'
import './InfoModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";

export default function InfoModal (props: {modalVisible: boolean, closeModal: () => void, text: string, heading: string}) {
  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={props.closeModal}>
                <div className="info-modal">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
            </Modal>}
    </AnimatePresence>
  )
}

