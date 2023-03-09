import React, {useEffect} from 'react'
import './App.scss'
import Board from "./GameComponents/Board/Board";
import SpaceView from "./GameComponents/SpaceView/SpaceView";
import {PlayerInterface, SpaceInterface} from "./d";
import PlayerViewContainer from "./GameComponents/PlayerViewContainer/PlayerViewContainer";
import {useParams} from "react-router-dom";
import DiceThrowModal from "./GameComponents/DiceThrowModal/DiceThrowModal";
import DrawStartingPlayerModal from "./GameComponents/DrawStartingPlayerModal/DrawStartingPlayerModal";

export default function Game() {

  const [selectedProperty, setSelectedProperty] = React.useState<SpaceInterface | null>(null);
  const [players, setPlayers] = React.useState<PlayerInterface[]>([]);
  const [diceModalOpen, setDiceModalOpen] = React.useState<boolean>(false);
  const [startingPlayerModalOpen, setStartingPlayerModalOpen] = React.useState<boolean>(false);
  const [diceValues, setDiceValues] = React.useState<[number, number]>([1, 1]);
  const [currentPlayer, setCurrentPlayer] = React.useState<PlayerInterface | null>(null);

  const { id } = useParams<{ id: string }>();

  const handleDiceThrow = () => {
    setDiceModalOpen(true);
  }

  const closeDiceModal = () => {
    setDiceModalOpen(false);
  }

  const closeStartingPlayerModal = () => {
    setStartingPlayerModalOpen(false);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/getGame/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.text())
    .then(data => {
        const game = JSON.parse(data);
        setPlayers(game.players);
        setStartingPlayerModalOpen(true);
    })
  }, [id]);

  useEffect(() => {
    if (currentPlayer && !startingPlayerModalOpen) {
      handleDiceThrow();
    }
  }, [currentPlayer]);

  useEffect(() => {
      if (currentPlayer) {
          handleDiceThrow();
      }
  }, [startingPlayerModalOpen]);

  useEffect(() => {
      if (currentPlayer) {
          const position = currentPlayer.position;
          const is_double = diceValues[0] === diceValues[1];
          currentPlayer.position = position + diceValues[0] + diceValues[1] % 40;
      }
  }, [diceValues]);

  const updateSelectedProperty = (space: SpaceInterface) => {
    setSelectedProperty(space);
  }

  return (
    <div className="App">
      <PlayerViewContainer players={players} />
      <Board updateSelectedProperty={updateSelectedProperty} players={players}/>
      <SpaceView space={selectedProperty} />
        <DiceThrowModal modalVisible={diceModalOpen} closeModal={closeDiceModal} setDiceValues={setDiceValues}/>
        <DrawStartingPlayerModal modalVisible={startingPlayerModalOpen} closeModal={closeStartingPlayerModal}
                                 players={players} setStartingPlayer={setCurrentPlayer} />
    </div>
  )
}
