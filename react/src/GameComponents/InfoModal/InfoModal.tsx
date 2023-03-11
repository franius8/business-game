import React from 'react'
import './InfoModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";

export default function InfoModal (props: {modalVisible: boolean, closeModal: () => void, text: string}) {
  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={props.closeModal}>
                <div className="info-modal">
                    {props.text}
                </div>
            </Modal>}
    </AnimatePresence>
  )
}

