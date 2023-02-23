import React from 'react'
import './App.scss'
import Board from "./Board/Board";
import BoardSquare from "./BoardSquare/BoardSquare";
import CornerSpace from "./CornerSpace/CornerSpace";
import SpaceContainer from "./SpaceContainer/SpaceContainer";
import Space from "./Space/Space";
import {AiOutlineArrowLeft, GiWindowBars, GrUserPolice, TbParking} from "react-icons/all";
import PropertyView from "./PropertyView/PropertyView";
import {PropertyType, SpaceInterface, SpaceType} from "./d";
import {bottomSpaces, leftSpaces, rightSpaces, topSpaces } from "./Spaces/spaces";

function App() {
  const corners = [1, 2, 3, 4];
  const cornerIcons = [<TbParking />, <GrUserPolice />, <GiWindowBars />, <AiOutlineArrowLeft />]
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
              <CornerSpace key={corner} corner={corner}>{cornerIcons[index]}</CornerSpace>
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
        <PropertyView space={selectedProperty} />
    </div>
  )
}

export default App
