import React from 'react'
import './WelcomeScreen.scss';
import {useNavigate} from "react-router-dom";

export default function WelcomeScreen () {

    const navigate = useNavigate();

    const navigateToNewGame = () => {
        navigate('/new-game')
    }

  return (
    <div className="WelcomeScreen">
      <button className={"new-game-button"} onClick={navigateToNewGame}>New game</button>
    </div>
  )
}

