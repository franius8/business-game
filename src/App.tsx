import React from 'react'
import './App.scss'
import Board from "./Board/Board";
import BoardSquare from "./BoardSquare/BoardSquare";
import CornerSpace from "./CornerSpace/CornerSpace";
import SpaceContainer from "./SpaceContainer/SpaceContainer";
import Space from "./Space/Space";
import {GiWindowBars, GrUserPolice, TbArrowLeftTail, TbParking} from "react-icons/all";
import SpaceView from "./SpaceView/SpaceView";
import {SpaceInterface} from "./d";
import {bottomSpaces, cornerSpaces, leftSpaces, rightSpaces, topSpaces} from "./Spaces/spaces";

function App() {
  const corners = [1, 2, 3, 4];
  const cornerIcons = [<TbParking />, <GrUserPolice />, <GiWindowBars />, <TbArrowLeftTail />];
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [selectedProperty, setSelectedProperty] = React.useState<SpaceInterface | null>(null);

  const updateSelectedProperty = (space: SpaceInterface) => {
    setSelectedProperty(space);
  }

  return (
    <div className="App">
      <Board>
          <BoardSquare />
          {corners.map((corner, index) => (
              <CornerSpace key={corner} corner={corner} space={cornerSpaces[index]} clickHandler={updateSelectedProperty}>
                  {cornerIcons[index]}
              </CornerSpace>
            ))}
          <SpaceContainer x={"left"} y={"vertical"}>
              {spaces.map((space, index) => (
                  <Space key={space} space={leftSpaces[index]} updateSelectedProperty={updateSelectedProperty}>
                      <p className={"propertyName"}>West</p>
                  </Space>
                ))}
          </SpaceContainer>
          <SpaceContainer x={"right"} y={"vertical"}>
              {spaces.map((space, index) => (
                  <Space key={space} space={rightSpaces[index]} updateSelectedProperty={updateSelectedProperty}>{space}</Space>
              ))}
          </SpaceContainer>
          <SpaceContainer x={"left"} y={"horizontal"}>
              {spaces.map((space, index) => (
                  <Space key={space} space={topSpaces[index]} updateSelectedProperty={updateSelectedProperty}>{space}</Space>
              ))}
          </SpaceContainer>
          <SpaceContainer x={"right"} y={"horizontal"}>
              {spaces.map((space, index) => (
                  <Space key={space} space={bottomSpaces[index]} updateSelectedProperty={updateSelectedProperty}>{space}</Space>
              ))}
          </SpaceContainer>
      </Board>
        <SpaceView space={selectedProperty} />
    </div>
  )
}

export default App
