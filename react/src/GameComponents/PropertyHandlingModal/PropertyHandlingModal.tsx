import React from 'react'
import './PropertyHandlingModal.scss';
import {AnimatePresence} from "framer-motion";
import Modal from "../../Modal/Modal";
import {allSpaces} from "../Spaces/spaces";
import {SpaceType} from "../../d";

export default function PropertyHandlingModal (props: {modalVisible: boolean, closeModal: () => void, properties: number[] | undefined}) {
  return (
    <AnimatePresence>
        {props.modalVisible && (
            <Modal close={()=> {}}>
                <div className="property-handling-modal">
                    <h2>Manage properties</h2>
                    <div className={"property-handle-div"}>
                        {props.properties ?
                            props.properties.map((spaceIndex, index) => {
                            const space = allSpaces.find(space => space.id === spaceIndex)!;
                            let name;
                            let mortgaged;
                            switch (space.type) {
                                case SpaceType.Property:
                                    name = space.property!.name;
                                    mortgaged = space.property!.mortgaged;
                                    break;
                                case SpaceType.Railroad:
                                    name = space.railroad!.name;
                                    mortgaged = space.railroad!.mortgaged;
                                    break;
                                case SpaceType.Utility:
                                    name = space.utility!.name;
                                    mortgaged = space.utility!.mortgaged;
                                    break;
                              default:
                                name = "Unknown";
                            }
                            return (
                                <div className={"property-handle"} key={index}>
                                    <div className={"property-handle-name"}>{name}</div>
                                    <div className={"property-handle-mortgage"}>{mortgaged ? "Mortgaged" : "Not mortgaged"}</div>
                                </div>
                            )}
                        )
                        :
                            <div>No properties to manage</div>
                        }
                    </div>
                </div>
            </Modal>)}
    </AnimatePresence>
  )
}

