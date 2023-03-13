import React from 'react'
import './NewGameForm.scss';
import {FaPlus} from "react-icons/all";
import GenerateIcon from "../GenerateIcon/GenerateIcon";
import {PlayerInterface} from "../d";
import {useNavigate} from "react-router-dom";
import NewGameFormModal from "../NewGameFormModal/NewGameFormModal";

export default function NewGameForm () {

    const [currentPlayerIcons, setCurrentPlayerIcons] = React.useState<(string | null)[]>([null, null, null, null]);
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [index, setIndex] = React.useState<number>(0);
    const [error, setError] = React.useState<string | null>(null);
    const [selectedColor, setSelectedColor] = React.useState<(number | null)[]>([null, null, null, null]);

    const navigate = useNavigate();
    const colors = ["red", "aqua", "green", "orange", "purple"];

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

    const selectColor = (e: React.MouseEvent<HTMLDivElement>, playerIndex: number, colorIndex: number) => {
        e.stopPropagation();
        const newSelectedColor = [...selectedColor];
        newSelectedColor[playerIndex] = colorIndex;
        setSelectedColor(newSelectedColor);
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
                    color: colors[selectedColor[index] || 0],
                    getOutOfJailFreeCards: 0,
                    inJail: false,
                    jailTurns: 0,
                    bankrupt: false,
                    houses: 0,
                    hotels: 0,
                    utilities: 0,
                    additionalStats: {
                        rentPaid: 0,
                        rentReceived: 0,
                    }
                })
            }
        })
        let game_id = "";
        fetch('http://localhost:3000/startGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(players)
        })
            .then(response => response.text())
            .then(text => game_id = text)
            .then(() => navigate(`/game/${game_id}`))
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
                                <div className={"player-info-icon"} style={{color: colors[selectedColor[index] || 0]}}>
                                    <GenerateIcon icon={playerNumber} />
                                </div>
                                <div className={"color-picker"}>
                                    {colors.map((color, index2) => (
                                        <div className={selectedColor[index] == index2 ? "selected" : ""}
                                             style={{backgroundColor: color}} key={index2}
                                             onClick={(e) => selectColor(e, index, index2)} />
                                    ))}
                                </div>
                            </div>
                            :
                            <FaPlus/>}
                    </div>
                ))}
            </div>
            <button className={"start-game-button"} onClick={startGame}>Start game</button>
            <NewGameFormModal closeModal={closeModal} currentPlayerIcons={currentPlayerIcons} error={error} index={index}
                              removePlayer={removePlayer} modalVisible={modalVisible} selectIcon={selectIcon}/>
        </div>
      )
}

