import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from "./Board/Board";
import BoardSquare from "./BoardSquare/BoardSquare";
import CornerSpace from "./CornerSpace/CornerSpace";
import SpaceContainer from "./SpaceContainer/SpaceContainer";
import Space from "./Space/Space";

function App() {
  const corners = [1, 2, 3, 4];
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="App">
      <Board>
          <BoardSquare>a</BoardSquare>
          {corners.map((corner) => (
              <CornerSpace key={corner} corner={corner}>{corner}</CornerSpace>
            ))}
          <SpaceContainer x={"left"} y={"vertical"}>
              {spaces.map((space) => (
                  <Space key={space}>{space}</Space>
                ))}
          </SpaceContainer>
          <SpaceContainer x={"right"} y={"vertical"}>
              {spaces.map((space) => (
                  <Space key={space}>{space}</Space>
              ))}
          </SpaceContainer>
          <SpaceContainer x={"left"} y={"horizontal"}>
              {spaces.map((space) => (
                  <Space key={space}>{space}</Space>
              ))}
          </SpaceContainer>
          <SpaceContainer x={"right"} y={"horizontal"}>
              {spaces.map((space) => (
                  <Space key={space}>{space}</Space>
              ))}
          </SpaceContainer>
      </Board>
    </div>
  )
}

export default App
