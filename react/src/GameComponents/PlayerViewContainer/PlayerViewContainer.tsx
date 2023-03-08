import React from 'react'
import './PlayerViewContainer.scss';
import {GiWindowBars} from "react-icons/all";
import PlayerView from "../PlayerView/PlayerView";
import {PlayerInterface} from "../../d";

export default function PlayerViewContainer (props: {players: PlayerInterface[]}) {
  return (
    <div className="PlayerViewContainer">
        {props.players.map((player, index) => {
            return (
                <PlayerView key={index} player={player} />
            )}
        )}
    </div>
  )
}

