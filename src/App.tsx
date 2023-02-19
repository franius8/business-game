import React from 'react'
import './App.scss'
import Board from "./Board/Board";
import BoardSquare from "./BoardSquare/BoardSquare";
import CornerSpace from "./CornerSpace/CornerSpace";
import SpaceContainer from "./SpaceContainer/SpaceContainer";
import Space from "./Space/Space";
import {AiOutlineArrowLeft, GiWindowBars, GrUserPolice, TbParking} from "react-icons/all";
import PropertyView from "./PropertyView/PropertyView";
import {PropertyType} from "./d";

function App() {
  const corners = [1, 2, 3, 4];
  const cornerIcons = [<TbParking />, <GrUserPolice />, <GiWindowBars />, <AiOutlineArrowLeft />]
  const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const testProperty = {
    color: PropertyType.Red,
    name: "Test",
    price: 100,
    rentnohouse: 10,
    rent1house: 20,
    rent2house: 30,
    rent3house: 40,
    rent4house: 50,
    renthotel: 60,
    housecost: 70,
    hotelcost: 80
  }

  return (
    <div className="App">
      <Board>
          <BoardSquare />
          {corners.map((corner, index) => (
              <CornerSpace key={corner} corner={corner}>{cornerIcons[index]}</CornerSpace>
            ))}
          <SpaceContainer x={"left"} y={"vertical"}>
              {spaces.map((space) => (
                  <Space key={space}>
                      <p className={"propertyName"}>West</p>
                  </Space>
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
        <PropertyView property={testProperty} />
    </div>
  )
}

export default App
