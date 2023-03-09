import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Game from "./Game";
import NewGameForm from "./NewGameForm/NewGameForm";
import {motion} from "framer-motion";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";

const router = createBrowserRouter([
    {
        path: '/game/:id',
        element: <Game />,
    },
    {
        path: '/new-game',
        element: <NewGameForm />
    },
    {
        path: '/',
        element: <WelcomeScreen />
    }
]);

export default function App() {
    
    return (
        <motion.div layout className="App">
            <RouterProvider router={router} />
        </motion.div>
    )
}