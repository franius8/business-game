import React from 'react'
import './DiceThrowModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";

export default function DiceThrowModal (props: {modalVisible: boolean, closeModal: () => void,
    setDiceValues: (dices: [number, number]) => void}) {

    const [dice1, setDice1] = React.useState(1);
    const [dice2, setDice2] = React.useState(1);
    const [throwing, setThrowing] = React.useState(false);
    const [throwFinished, setThrowFinished] = React.useState(false);

    const generateDiceThrow = () => {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        return [dice1, dice2];
    }

    const generateDiceThrowAnimation = () => {
        setThrowing(true);
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        setDice1(dice1);
        setDice2(dice2);
        setTimeout(() => {
            const [dice1, dice2] = generateDiceThrow();
            setDice1(dice1);
            setDice2(dice2);
            setThrowFinished(true);
            setThrowing(false);
            props.setDiceValues([dice1, dice2]);
            props.closeModal();
        }, 1000)
    }

    const generateDiceDiv = (dice: number) => {
        switch (dice) {
            case 1:
                return (
                    <div className="dice dice-one">
                        <div className="dot" style={{gridArea: "2 / 2 / 3 / 3"}}></div>
                    </div>
                )
            case 2:
                return (
                    <div className="dice dice-two">
                        <div className="dot" style={{gridArea: "1 / 1 / 2 / 2"}}></div>
                        <div className="dot" style={{gridArea: "3 / 3 / 4 / 4"}}></div>
                    </div>
                )
            case 3:
                return (
                    <div className="dice dice-three">
                        <div className="dot" style={{gridArea: "1 / 1 / 2 / 2"}}></div>
                        <div className="dot" style={{gridArea: "2 / 2 / 3 / 3"}}></div>
                        <div className="dot" style={{gridArea: "3 / 3 / 4 / 4"}}></div>
                    </div>
                )
            case 4:
                return (
                    <div className="dice dice-four">
                        <div className="dot" style={{gridArea: "1 / 1 / 2 / 2"}}></div>
                        <div className="dot" style={{gridArea: "1 / 3 / 2 / 4"}}></div>
                        <div className="dot" style={{gridArea: "3 / 1 / 4 / 2"}}></div>
                        <div className="dot" style={{gridArea: "3 / 3 / 4 / 4"}}></div>
                    </div>
                )
            case 5:
                return (
                    <div className="dice dice-five">
                        <div className="dot" style={{gridArea: "1 / 1 / 2 / 2"}}></div>
                        <div className="dot" style={{gridArea: "1 / 3 / 2 / 4"}}></div>
                        <div className="dot" style={{gridArea: "2 / 2 / 3 / 3"}}></div>
                        <div className="dot" style={{gridArea: "3 / 1 / 4 / 2"}}></div>
                        <div className="dot" style={{gridArea: "3 / 3 / 4 / 4"}}></div>
                    </div>
                )
            case 6:
                return (
                    <div className="dice dice-six">
                        <div className="dot" style={{gridArea: "1 / 1 / 2 / 2"}}></div>
                        <div className="dot" style={{gridArea: "1 / 2 / 2 / 3"}}></div>
                        <div className="dot" style={{gridArea: "1 / 3 / 2 / 4"}}></div>
                        <div className="dot" style={{gridArea: "3 / 1 / 4 / 2"}}></div>
                        <div className="dot" style={{gridArea: "3 / 2 / 4 / 3"}}></div>
                        <div className="dot" style={{gridArea: "3 / 3 / 4 / 4"}}></div>
                    </div>
                )
        }
    }

  return (
    <AnimatePresence>
        {props.modalVisible &&
            <Modal close={props.closeModal}>
                <h2 className={"dice-throw-heading"}>Throw dice</h2>
                <div className="dice-container">
                    {generateDiceDiv(dice1)}
                    {generateDiceDiv(dice2)}
                </div>
                <div className={"dice-button-div"}>
                    {!throwFinished ?
                        <button className={`throw-dice-button ${throwing ? "dice-disabled" : ""}`}
                                onClick={generateDiceThrowAnimation}>Throw</button>
                        :
                        <button className={"throw-dice-button"} onClick={props.closeModal}>Close</button>
                    }
                </div>
            </Modal>}
    </AnimatePresence>
  )
}

