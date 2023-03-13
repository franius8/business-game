import React from "react";
import "./Board.scss";
import {PlayerInterface, SpaceInterface} from "../../d";
import BoardSquare from "../BoardSquare/BoardSquare";
import CornerSpace from "../CornerSpace/CornerSpace";
import {bottomSpaces, cornerSpaces, leftSpaces, rightSpaces, topSpaces} from "../Spaces/spaces";
import SpaceContainer from "../SpaceContainer/SpaceContainer";
import Space from "../Space/Space";

export default function Board(props: { updateSelectedProperty: (space: SpaceInterface) => void, players: PlayerInterface[],
    turnCount: number}) {
    const updateSelectedProperty = props.updateSelectedProperty;
    const corners = [1, 2, 3, 4];

    const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={"board"}>
            <BoardSquare />
            {corners.map((corner, index) => (
                <CornerSpace key={corner} corner={corner} space={cornerSpaces[index]} players={props.players}
                             clickHandler={updateSelectedProperty} turnCount={props.turnCount} />
            ))}
            <SpaceContainer x={"left"} y={"vertical"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={leftSpaces[index]} updateSelectedProperty={updateSelectedProperty}
                           players={props.players} turnCount={props.turnCount}/>
                ))}
            </SpaceContainer>
            <SpaceContainer x={"right"} y={"vertical"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={rightSpaces[index]} updateSelectedProperty={updateSelectedProperty}
                           players={props.players} turnCount={props.turnCount}/>
                ))}
            </SpaceContainer>
            <SpaceContainer x={"left"} y={"horizontal"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={topSpaces[index]} updateSelectedProperty={updateSelectedProperty}
                           players={props.players} turnCount={props.turnCount}/>
                ))}
            </SpaceContainer>
            <SpaceContainer x={"right"} y={"horizontal"}>
                {spaces.map((space, index) => (
                    <Space key={space} space={bottomSpaces[index]} updateSelectedProperty={updateSelectedProperty}
                           players={props.players} turnCount={props.turnCount}/>
                ))}
            </SpaceContainer>
        </div>
    );
}