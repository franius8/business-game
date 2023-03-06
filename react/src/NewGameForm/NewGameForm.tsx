import React, {MouseEventHandler, ReactElement, useEffect} from 'react'
import './NewGameForm.scss';
import Modal from "../Modal/Modal";
import {AnimatePresence} from "framer-motion";
import {playerIcons} from "../PlayerAttributes/PlayerIcons";
import {FaPlus, RiErrorWarningLine} from "react-icons/all";
import GenerateIcon from "../GenerateIcon/GenerateIcon";
import {PlayerInterface} from "../d";

export default function NewGameForm () {

    const [currentPlayerIcons, setCurrentPlayerIcons] = React.useState<(string | null)[]>([null, null, null, null]);
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [index, setIndex] = React.useState<number>(0);
    const [error, setError] = React.useState<string | null>(null);

    const fetchTest = () => {
        fetch('http://localhost:3000/testAPI')
            .then(response => response.text())
            .then(data => console.log(data))
    }

    const openModal = (index: number) => {
        setModalVisible(true);
        setIndex(index);
    }

    const closeModal = () => {
        setModalVisible(false);
        setError(null);
    }

    const selectIcon = (e: React.MouseEvent<HTMLDivElement>, icon: string) => {
        e.stopPropagation();
        if (currentPlayerIcons.includes(icon)) {
            setError("Icon already selected");
            e.currentTarget.style.borderColor = "red";
            return;
        }
        const newCurrentPlayerIcons = [...currentPlayerIcons];
        newCurrentPlayerIcons[index] = icon;
        setCurrentPlayerIcons(newCurrentPlayerIcons);
        closeModal();
    }

    const removePlayer = () => {
        const newCurrentPlayerIcons = [...currentPlayerIcons];
        newCurrentPlayerIcons[index] = null;
        setCurrentPlayerIcons(newCurrentPlayerIcons);
        closeModal();
    }

    const startGame = () => {
        const players: PlayerInterface[] = [];
        currentPlayerIcons.forEach((icon, index) => {
            if (icon) {
                players.push({
                    position: 0,
                    money: 1500,
                    properties: [],
                    pawn: icon!,
                    name: `Player ${index + 1}`,
                    color: "red"
                })
            }
        })
        fetch('http://localhost:3000/startGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(players)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

      return (
        <div className="NewGameForm">
          <h1>Start new game</h1>
            <div className={"player-grid"}>
                {currentPlayerIcons.map((playerNumber, index) => (
                    <div className="player" key={index} onClick={() => openModal(index)}>
                        {playerNumber
                            ?
                            <div className={"player-info"}>
                                <p>Player {index + 1}</p>
                                <div className={"player-info-icon"}><GenerateIcon icon={playerNumber} /></div>
                            </div>
                            :
                            <FaPlus/>}
                    </div>
                ))}
            </div>
            <button className={"start-game-button"} onClick={startGame}>Start game</button>
            <AnimatePresence>
                {modalVisible &&
                    <Modal close={closeModal}>
                        <h2>Select icon</h2>
                        <div className="icons-selection">
                            {playerIcons.map((Icon, index) => (
                                !currentPlayerIcons.includes(Icon) ?
                                <div className="icon" key={index}
                                     onClick={(e) => selectIcon(e, Icon)}>
                                    <GenerateIcon icon={Icon} />
                                </div>
                                    :
                                <div className="icon icon-disabled" key={index}
                                     onClick={(e) => selectIcon(e, Icon)}>
                                    <GenerateIcon icon={Icon} />
                                </div>
                            ))}
                        </div>
                        {currentPlayerIcons[index] &&
                            <div className={"remove-button-container"}>
                                <button className={"remove-button"} onClick={removePlayer}>Remove player</button>
                            </div>
                        }
                        <div className="error">{
                            error &&
                            <>
                                <div className={"error-icon"}><RiErrorWarningLine /></div>
                                    {error}
                            </>
                        }</div>
                    </Modal>
                }
            </AnimatePresence>
        </div>
      )
}

