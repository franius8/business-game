import React, {useDebugValue, useEffect} from 'react'
import './App.scss'
import "./Game.scss";
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
  const [doubleCount, setDoubleCount] = React.useState<number>(0);
  const [turnCount, setTurnCount] = React.useState<number>(0);
  const [diceThrown, setDiceThrown] = React.useState<boolean>(false);

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

  const changeCurrentPlayer = () => {
      setDiceThrown(false);
    const index = players.indexOf(currentPlayer!);
    if (index < players.length - 1) {
        setCurrentPlayer(players[index + 1]);
    } else {
        setCurrentPlayer(players[0]);
    }
  }

  const logTurn = (initial_position: number, final_position: number) => {
    return fetch(`http://localhost:3000/gameLogger/addEntry`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            game_id: id,
            entry: {
                name: currentPlayer!.name,
                initial_position: initial_position,
                final_position: final_position,
                dice_values: diceValues
            },
        })
    })
  }

  const updatePlayers = () => {
      return fetch(`http://localhost:3000/getGame/updateTurn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                game_id: id,
                players: players,
                turn: turnCount,
                currentPlayer: players.indexOf(currentPlayer!)
            }),
        })
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
        setTurnCount(game.turn);
        setCurrentPlayer(game.players[game.currentPlayer])
        if (game.turn === 0) {
            setStartingPlayerModalOpen(true);
        }
    })
      console.log(players)
  }, [id]);

  useEffect(() => {
      if (currentPlayer) {
          const position = currentPlayer.position;
          const is_double = diceValues[0] === diceValues[1];
          if (is_double && doubleCount == 2) {
                currentPlayer.position = 10;
                setDoubleCount(0)
          } else {
              currentPlayer.position = position + diceValues[0] + diceValues[1] % 40;
          }
          logTurn(position, currentPlayer.position).then(() => {
                setTurnCount(turnCount + 1);
                updatePlayers()
                    .then(() => {
                        setDiceThrown(true);
                        return;
                    })
          })
      }
  }, [diceValues]);

  const updateSelectedProperty = (space: SpaceInterface) => {
    setSelectedProperty(space);
  }

  return (
    <div className="App">
      <PlayerViewContainer players={players} />
      <Board updateSelectedProperty={updateSelectedProperty} players={players} turnCount={turnCount}/>
        <div className={"side-container"}>
            <div className={"current-player-container"}>
                <h2>Current player</h2>
                <p>{currentPlayer?.name}</p>
            </div>
            <SpaceView space={selectedProperty} />
            <div className={`wrapper ${!diceThrown ? "" : "game-button-disabled"}`}>
                <button className={"dice-button"} onClick={handleDiceThrow}>Throw dice</button>
            </div>
            <div className={`wrapper ${diceThrown ? "" : "game-button-disabled"}`}>
                <button className={"end-turn-button"} onClick={changeCurrentPlayer}>End turn</button>
            </div>
        </div>
        <DiceThrowModal modalVisible={diceModalOpen} closeModal={closeDiceModal} setDiceValues={setDiceValues}/>
        <DrawStartingPlayerModal modalVisible={startingPlayerModalOpen} closeModal={closeStartingPlayerModal}
                                 players={players} setStartingPlayer={setCurrentPlayer} />
    </div>
  )
}
