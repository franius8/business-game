import React from 'react'
import './App.scss'
import Board from "./GameComponents/Board/Board";
import {GiWindowBars, GrUserPolice, TbArrowLeftTail, TbParking} from "react-icons/all";
import SpaceView from "./GameComponents/SpaceView/SpaceView";
import {SpaceInterface} from "./d";
import PlayerViewContainer from "./GameComponents/PlayerViewContainer/PlayerViewContainer";

export default function Game() {

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
