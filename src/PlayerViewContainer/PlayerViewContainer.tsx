import React from 'react'
import './PlayerViewContainer.scss';
import {GiWindowBars} from "react-icons/all";
import PlayerView from "../PlayerView/PlayerView";

export default function PlayerViewContainer () {
  return (
    <div className="PlayerViewContainer">
        <PlayerView player={{name: "Player 1", color: "red", pawn: GiWindowBars, money: 1500, position: 0, properties: []}} />
        <PlayerView player={{name: "Player 1", color: "red", pawn: GiWindowBars, money: 1500, position: 0, properties: []}} />
        <PlayerView player={{name: "Player 1", color: "red", pawn: GiWindowBars, money: 1500, position: 0, properties: []}} />
    </div>
  )
}

