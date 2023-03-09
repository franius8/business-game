import React from 'react'
import './DrawStartingPlayerModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";
import {PlayerInterface} from "../../d";

export default function DrawStartingPlayerModal (props:
{modalVisible: boolean, closeModal: () => void, players: PlayerInterface[], setStartingPlayer: (player: PlayerInterface) => void}) {

  const [playerName, setPlayerName] = React.useState("");
  const [drawn, setDrawn] = React.useState(false);
  const drawStartingPlayer = () => {
    const player = props.players[Math.floor(Math.random() * props.players.length)];
    props.setStartingPlayer(player);
    setPlayerName(player.name);
    setDrawn(true);
  }

  return (
    <AnimatePresence>
        {props.modalVisible && (
            <Modal close={() => {}}>
                <div className="DrawStartingPlayerModal">
                    <h2>Draw Starting Player</h2>
                    <p>{playerName == "" ? "Click to draw the starting player" : `${playerName} will go first!`}</p>
                  <div className={"draw-button-container"}>
                    {!drawn ?
                        <button className={"draw-button"} onClick={drawStartingPlayer}>Draw</button>
                        :
                        <button className={"close-button"}>Close</button>
                    }
                  </div>
                </div>
            </Modal>)}
    </AnimatePresence>
  )
}

