import React, { useState } from "react";
import PropTypes from "prop-types";
import { checkBingo } from "../util/utilities";
import BingoImage from "../util/bingo.jfif";
import "../styles/ticket.css";

const CENTER_INDEX = 12;

const Ticket = ({ ticketElements, currentCalledName }) => {
  const initialTicketState = Array(25).fill(false);

  //We need to show 'Bingo' image at center. Hence setting this index true by default
  initialTicketState[CENTER_INDEX] = true;

  const [bingoElements, setBingoElements] = useState(null);
  const [ticketState, setTicketState] = useState(initialTicketState);

  //mark the clicked index as checked/true
  const onElementClick = (index, clicked) => {
    const currentTicket = [...ticketState];
    currentTicket[index] = clicked;
    setTicketState(currentTicket);
    const result = checkBingo(currentTicket, index);
    setBingoElements(result);
  };

  const isBingoElement = (index) => {
    return bingoElements !== null && bingoElements.includes(index)
      ? true
      : false;
  };

  const onClick = (index) => {
    //setChecked(true);
    onElementClick(index, true);
  };

  const showTicketElements = () => {
    return ticketElements.map((element, index) => {
      const isCalled = element === currentCalledName;
      //render bingo image at ticket's center
      if (index === 12)
        return (
          <div className="element" key={index}>
            <img className="gallery__img" src={BingoImage} alt="Bingo" />
          </div>
        );
      return (
        <div
          key={index}
          className={`element ${ticketState[index] ? "element--clicked" : ""} ${
            isCalled ? "generated" : ""
          } ${isBingoElement(index) ? "shake" : ""} `}
          onClick={() => onClick(index)}
        >
          {element}
        </div>
      );
    });
  };

  return <div className="grid">{showTicketElements()}</div>;
};

Ticket.propTypes = {
  ticketElements: PropTypes.array,
  currentCalledName: PropTypes.string,
};

export default Ticket;
