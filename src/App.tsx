import React from 'react'
import './App.scss'
import Board from "./Board/Board";
import {GiWindowBars, GrUserPolice, TbArrowLeftTail, TbParking} from "react-icons/all";
import SpaceView from "./SpaceView/SpaceView";
import {SpaceInterface} from "./d";
import PlayerView from "./PlayerView/PlayerView";

export default function App() {
  const corners = [1, 2, 3, 4];
  const cornerIcons = [<TbParking />, <GrUserPolice />, <GiWindowBars />, <TbArrowLeftTail />];
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selectedProperty, setSelectedProperty] = React.useState<SpaceInterface | null>(null);

  const updateSelectedProperty = (space: SpaceInterface) => {
    setSelectedProperty(space);
  }

  return (
    <div className="App">
      <PlayerView player={{name: "Player 1", color: "red", pawn: GiWindowBars, money: 1500, position: 0, properties: []}} />
      <Board updateSelectedProperty={updateSelectedProperty} />
      <SpaceView space={selectedProperty} />
    </div>
  )
}
