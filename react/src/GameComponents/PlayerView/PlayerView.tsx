import React from 'react'
import './PlayerView.scss'
import {PlayerInterface} from "../../d";

export default function PlayerView (props: { player: PlayerInterface }) {
    const player = props.player;
    return (
        <div className="player-view">
            <div className={"player-icon"} style={{borderColor: player.color, backgroundColor: player.color}}>
                <player.pawn />
            </div>
            <div className={"player-main-div"}>
                <div className={"player-name"}>
                    <p>{player.name}</p>
                </div>
                <div className={"player-money"}>
                    <p>${player.money}</p>
                </div>
            </div>
        </div>
)}

