import React from 'react'
import './Modal.scss';
import { createPortal } from "react-dom";
import {motion} from "framer-motion";

export default function Modal (props: { close: () => void }) {

    const initialBackground = {opacity: 0};
    const animateBackground = {opacity: 1};
    const exitBackground = {opacity: 0};

    const initialModal = {opacity: 0, y: "-100vh", translateX: "-50%", translateY: "-50%"};
    const animateModal = {opacity: 1, y: "0", translateX: "-50%", translateY: "-50%"};
    const exitModal = {opacity: 0, y: "-100vh", translateX: "-50%", translateY: "-50%"};

    return (
        <>
            {createPortal(
                <motion.div initial={initialBackground} animate={animateBackground} exit={exitBackground}
                            className={"blur"} onClick={props.close}>
                    <motion.div initial={initialModal} animate={animateModal} exit={exitModal} className={"modal"}>
                        <h1>Modal</h1>
                        <p>Modal content</p>
                        <button onClick={props.close}>Close</button>
                    </motion.div>
                </motion.div>,
                document.querySelector('#modal-root')!
            )}
        </>
    )
}

