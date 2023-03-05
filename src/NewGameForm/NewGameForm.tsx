import React from 'react'
import './NewGameForm.scss';
import Modal from "../Modal/Modal";
import {AnimatePresence} from "framer-motion";

export default function NewGameForm () {

    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    const closeModal = () => {
        setModalVisible(false);
    }

      return (
        <div className="NewGameForm">
          <h1>Start new game</h1>
            <form>
                <label htmlFor="player1">Player 1</label>
                <input type="text" id="player1" name="player1" />
            </form>
            <button onClick={() => setModalVisible(true)}>Open Modal</button>
            <AnimatePresence>
                {modalVisible && <Modal close={closeModal}/>}
            </AnimatePresence>
        </div>
      )
}

