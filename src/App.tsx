import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Game from "./Game";
import NewGameForm from "./NewGameForm/NewGameForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Game />,
    },
    {
        path: '/new-game',
        element: <NewGameForm />
    }
]);

export default function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}