import React from "react";
import "./Board.scss";
import {GiWindowBars, GrUserPolice, TbArrowLeftTail, TbParking} from "react-icons/all";
import {SpaceInterface} from "../d";
import BoardSquare from "../BoardSquare/BoardSquare";
import CornerSpace from "../CornerSpace/CornerSpace";
import {bottomSpaces, cornerSpaces, leftSpaces, rightSpaces, topSpaces} from "../Spaces/spaces";
import SpaceContainer from "../SpaceContainer/SpaceContainer";
import Space from "../Space/Space";

export default function Board(props: { updateSelectedProperty: (space: SpaceInterface) => void }) {
    const updateSelectedProperty = props.updateSelectedProperty;
    const corners = [1, 2, 3, 4];
    const cornerIcons = [<TbParking />, <GrUserPolice />, <GiWindowBars />, <TbArrowLeftTail />];
    const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={"board"}>
            <BoardSquare />
            {corners.map((corner, index) => (
                <CornerSpace key={corner} corner={corner} space={cornerSpaces[index]} clickHandler={updateSelectedProperty} />
            ))}
            <SpaceContainer x={"left"} y={"vertical"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={leftSpaces[index]} updateSelectedProperty={updateSelectedProperty} />
                ))}
            </SpaceContainer>
            <SpaceContainer x={"right"} y={"vertical"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={rightSpaces[index]} updateSelectedProperty={updateSelectedProperty} />
                ))}
            </SpaceContainer>
            <SpaceContainer x={"left"} y={"horizontal"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={topSpaces[index]} updateSelectedProperty={updateSelectedProperty} />
                ))}
            </SpaceContainer>
            <SpaceContainer x={"right"} y={"horizontal"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={bottomSpaces[index]} updateSelectedProperty={updateSelectedProperty} />
                ))}
            </SpaceContainer>
        </div>
    );
}