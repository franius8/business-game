import React, {ReactElement} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Game from "./Game";
import NewGameForm from "./NewGameForm/NewGameForm";
import {motion} from "framer-motion";

let currentPlayerIcons: (ReactElement | null)[] = [null, null, null, null];
const setCurrentPlayerIcons = (icons: (ReactElement | null)[]) => {
    currentPlayerIcons = icons;
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Game />,
    },
    {
        path: '/new-game',
        element: <NewGameForm currentPlayerIcons={currentPlayerIcons}  setCurrentPlayerIcons={setCurrentPlayerIcons} />
    }
]);

export default function App() {
    
    return (
        <motion.div layout className="App">
            <RouterProvider router={router} />
        </motion.div>
    )
}