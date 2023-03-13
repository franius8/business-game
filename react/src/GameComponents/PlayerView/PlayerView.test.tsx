import React from 'react';
import { act } from 'react-dom/test-utils';

import PlayerView from "./PlayerView";
import {PlayerInterface} from "../../d";
import {TbRainbow} from "react-icons/tb";
import {render} from "react-dom";

let container: Element | null = null;

beforeEach(() => {
  // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    document.body.removeChild(container!);
    container = null;
});

it("renders the player name", () => {
    const testPlayer:PlayerInterface = {
        name: "test",
        color: "red",
        pawn: "TbRainbow",
        position: 0,
        money: 1500,
        properties: [],
        getOutOfJailFreeCards: 0,
    }
    act(() => {
        render(<PlayerView player={testPlayer} />, container!);
    });
    expect(container!.querySelector(".player-name")!.textContent).toBe("test");
    expect(container!.querySelector(".player-money")!.textContent).toBe("$1500");
});