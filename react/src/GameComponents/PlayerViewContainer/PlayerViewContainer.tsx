import React from 'react'
import './PlayerViewContainer.scss';
import PlayerView from "../PlayerView/PlayerView";
import {PlayerInterface} from "../../d";

export default function PlayerViewContainer (props: {players: PlayerInterface[], currentPlayer: PlayerInterface | null}) {
  return (
    <div className="PlayerViewContainer">
        {props.players.map((player, index) => {
            return (
                <div className={props.currentPlayer === player ? "current-player" : ""}>
                  <PlayerView key={index} player={player} />
                </div>
            )}
        )}
    </div>
  )
}

