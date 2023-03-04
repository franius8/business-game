import React from 'react'
import './App.scss'
import Board from "./Board/Board";
import {GiWindowBars, GrUserPolice, TbArrowLeftTail, TbParking} from "react-icons/all";
import SpaceView from "./SpaceView/SpaceView";
import {SpaceInterface} from "./d";
import PlayerViewContainer from "./PlayerViewContainer/PlayerViewContainer";

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
      <PlayerViewContainer />
      <Board updateSelectedProperty={updateSelectedProperty} />
      <SpaceView space={selectedProperty} />
    </div>
  )
}
