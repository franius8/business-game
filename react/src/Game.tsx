import React, {useEffect} from 'react'
import './App.scss'
import "./Game.scss";
import Board from "./GameComponents/Board/Board";
import SpaceView from "./GameComponents/SpaceView/SpaceView";
import {CommunityChestCardActionType, PlayerInterface, SpaceInterface} from "./d";
import PlayerViewContainer from "./GameComponents/PlayerViewContainer/PlayerViewContainer";
import {useParams} from "react-router-dom";
import DiceThrowModal from "./GameComponents/DiceThrowModal/DiceThrowModal";
import DrawStartingPlayerModal from "./GameComponents/DrawStartingPlayerModal/DrawStartingPlayerModal";
import {bottomSpaces, rightSpaces} from "./GameComponents/Spaces/spaces";
import InfoModal from "./GameComponents/InfoModal/InfoModal";
import {CommunityChestCards} from "./ChanceCards/CommunityChestCards";

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
  const [infoModalText, setInfoModalText] = React.useState<string>("");
  const [infoModalOpen, setInfoModalOpen] = React.useState<boolean>(false);

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

  const handleTax = (number: number) => {
      let amount;
        if (number === 4) {
            amount = bottomSpaces.find(space => space.id === 4)!.tax!.amount;
        }
        else {
            amount = rightSpaces.find(space => space.id === 38)!.tax!.amount;
        }
      currentPlayer!.money -= amount;
        setInfoModalOpen(true);
        setInfoModalText(`You paid $${amount} in taxes.`);
  }

    const handleRailroad = () => {
        let space = rightSpaces.find(space => space.id === currentPlayer!.position)!;
        if (!space) {
            space = bottomSpaces.find(space => space.id === currentPlayer!.position)!;
        }
        if (!space) {
            space = rightSpaces.find(space => space.id === currentPlayer!.position)!;
        }
        if (!space) {
            space = bottomSpaces.find(space => space.id === currentPlayer!.position)!;
        }
        const railroad = space.railroad;
        const railroadOwner = players.find(player => player === railroad!.owner);
        if (railroadOwner) {
            const railroadsOwned = players.filter(player => player === railroadOwner).length;
            const rent = railroad!.rent * 2 ** (railroadsOwned - 1)
            currentPlayer!.money -= rent;
            railroadOwner.money += rent;
            setInfoModalOpen(true);
            setInfoModalText(`You paid $${rent} in rent to ${railroadOwner.name}.`);
        }
        else {
            setInfoModalOpen(true);
            setInfoModalText(`You landed on ${railroad!.name}. It is currently unowned.`);
        }
    }

    const handleCommunityChest = () => {
      const communityChestCard = CommunityChestCards[Math.floor(Math.random() * CommunityChestCards.length)];
      setInfoModalOpen(true);
      setInfoModalText(communityChestCard.text);
      switch (communityChestCard.action) {
          case CommunityChestCardActionType.AdvanceToGo:
                currentPlayer!.position = 0;
                currentPlayer!.money += 200;
                break;
          case CommunityChestCardActionType.GoToJail:
                currentPlayer!.position = 10;
                break;
          case CommunityChestCardActionType.PayBank:
                currentPlayer!.money -= communityChestCard.amount!;
                break;
          case CommunityChestCardActionType.CollectFromBank:
                currentPlayer!.money += communityChestCard.amount!;
                break;
      }
    }

    const handleChance = () => {
        const chanceCard = CommunityChestCards[Math.floor(Math.random() * CommunityChestCards.length)];
        setInfoModalOpen(true);
        setInfoModalText(chanceCard.text);
        switch (chanceCard.action) {
            case "advanceToGo":

        }
    }

    const handleUtility = () => {

    }

    const handleProperty = () => {

    }

  const handleNewPosition = (prevPosition: number) => {
      if (currentPlayer!.position < prevPosition) {
            currentPlayer!.money += 200;
      }
      if (currentPlayer!.position === 0) {
            currentPlayer!.money += 200;
      }
       if (currentPlayer!.position === 30) {
            currentPlayer!.position = 10;
      }
        if (currentPlayer!.position === 2 || currentPlayer!.position === 17 || currentPlayer!.position === 33) {
            handleCommunityChest();
        }
        if (currentPlayer!.position === 7 || currentPlayer!.position === 22 || currentPlayer!.position === 36) {
            handleChance();
        }
        if (currentPlayer!.position === 4 || currentPlayer!.position === 38) {
            handleTax(currentPlayer!.position);
        }
        if (currentPlayer!.position === 5 || currentPlayer!.position === 15 || currentPlayer!.position === 25 || currentPlayer!.position === 35) {
            handleRailroad();
        }
        if (currentPlayer!.position === 12 || currentPlayer!.position === 28) {
            handleUtility();
        }
       else {
            handleProperty();
        }
  }

  const changeCurrentPlayer = () => {
      setDiceThrown(false);
    const index = players.indexOf(currentPlayer!);
    fetch(`http://localhost:3000/getGame/changePlayer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            game_id: id,
            index: index,
        }
    )})
        .then(response => response.json())
        .then(data => {
            setCurrentPlayer(players[parseInt(data)]);
            console.log(data);
        }
    )
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
  }, [id]);

  useEffect(() => {
      if (currentPlayer) {
          const position = currentPlayer.position;
          const is_double = diceValues[0] === diceValues[1];
          if (is_double && doubleCount == 2) {
                currentPlayer.position = 10;
                setDoubleCount(0)
          } else {
              currentPlayer.position = (position + diceValues[0] + diceValues[1]) % 40;
          }
          logTurn(position, currentPlayer.position).then(() => {
                setTurnCount(turnCount + 1);
                updatePlayers()
                    .then(() => {
                        setDiceThrown(true);
                    })
                    .then(() => {
                        handleNewPosition(position);
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
        <InfoModal modalVisible={infoModalOpen} closeModal={() => setInfoModalOpen(false)} text={infoModalText} />
    </div>
  )
}
