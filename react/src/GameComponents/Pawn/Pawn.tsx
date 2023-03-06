import React from 'react'
import './Pawn.scss';
import {IconType} from "react-icons/lib";

export default function Pawn (props: { pawn: IconType }) {
  return (
    <props.pawn />
  )
}

