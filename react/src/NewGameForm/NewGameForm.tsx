import React, {MouseEventHandler, ReactElement} from 'react'
import './NewGameForm.scss';
import Modal from "../Modal/Modal";
import {AnimatePresence} from "framer-motion";
import {playerIcons} from "../PlayerAttributes/PlayerAttributes";
import {FaPlus} from "react-icons/all";
import {IconType} from "react-icons";

export default function NewGameForm (props: { currentPlayerIcons: (ReactElement | null)[], setCurrentPlayerIcons: (icons: (ReactElement | null)[]) => void }) {

    const {currentPlayerIcons, setCurrentPlayerIcons} = props;
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [index, setIndex] = React.useState<number>(0);

    const openModal = (index: number) => {
        setModalVisible(true);
        setIndex(index);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const selectIcon = (e: React.MouseEvent<HTMLDivElement>, Icon: ReactElement) => {
        e.stopPropagation();
        const newCurrentPlayerIcons = [...currentPlayerIcons];
        newCurrentPlayerIcons[index] = Icon;
        setCurrentPlayerIcons(newCurrentPlayerIcons);
        closeModal();
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
                                <p>Player {index}</p>
                                {playerNumber}
                            </div>
                            :
                            <FaPlus/>}
                    </div>
                ))}
            </div>
            <button onClick={() => setModalVisible(true)}>Open Modal</button>
            <AnimatePresence>
                {modalVisible &&
                    <Modal close={closeModal}>
                        <h2>Select icon</h2>
                        <div className="icons-selection">
                            {playerIcons.map((Icon, index) => (
                                <div className="icon" key={index}
                                     onClick={(e) => selectIcon(e, Icon)}>
                                    {Icon}
                                </div>
                            ))}
                        </div>
                    </Modal>
                }
            </AnimatePresence>
        </div>
      )
}

