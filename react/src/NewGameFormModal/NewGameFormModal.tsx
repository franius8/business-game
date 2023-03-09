import React from 'react'
import './NewGameFormModal.scss';
import Modal from "../Modal/Modal";
import {playerIcons} from "../PlayerAttributes/PlayerIcons";
import GenerateIcon from "../GenerateIcon/GenerateIcon";
import {RiErrorWarningLine} from "react-icons/all";
import {AnimatePresence} from "framer-motion";

export default function NewGameFormModal (props: {
    modalVisible: boolean,
    closeModal: () => void,
    index: number,
    error: string | null,
    currentPlayerIcons: (string | null)[],
    selectIcon: (e: React.MouseEvent<HTMLDivElement>, icon: string) => void,
    removePlayer: () => void
}) {
  return (
      <AnimatePresence>
          {props.modalVisible &&
              <Modal close={props.closeModal}>
                  <h2>Select icon</h2>
                  <div className="icons-selection">
                      {playerIcons.map((Icon, index) => (
                          !props.currentPlayerIcons.includes(Icon) ?
                              <div className="icon" key={index}
                                   onClick={(e) => props.selectIcon(e, Icon)}>
                                  <GenerateIcon icon={Icon} />
                              </div>
                              :
                              <div className="icon icon-disabled" key={index}
                                   onClick={(e) => props.selectIcon(e, Icon)}>
                                  <GenerateIcon icon={Icon} />
                              </div>
                      ))}
                  </div>
                  {props.currentPlayerIcons[props.index] &&
                      <div className={"remove-button-container"}>
                          <button className={"remove-button"} onClick={props.removePlayer}>Remove player</button>
                      </div>
                  }
                  <div className="error">{
                      props.error &&
                      <>
                          <div className={"error-icon"}><RiErrorWarningLine /></div>
                          {props.error}
                      </>
                  }</div>
              </Modal>
          }
      </AnimatePresence>
  )
}

