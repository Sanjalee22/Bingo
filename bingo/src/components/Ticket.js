import React, { useState } from "react";
import PropTypes from "prop-types";
import { checkBingo } from "../util/utilities";
import BingoImage from "../util/bingo.jfif";
import { ticketSize } from "../util/constants";
import "../styles/ticket.css";

const CENTER_INDEX = 12;
const initialTicketState = Array(ticketSize).fill(false);
//We need to show 'Bingo' image at center. Hence setting this index true by default
initialTicketState[CENTER_INDEX] = true;

const Ticket = ({ ticketElements, calledCities }) => {
  //list of elements part of the bingo winning combination
  const [bingoElements, setBingoElements] = useState([]);

  //stores true or false for each index in the ticket. If element is called and clicked,
  //the corresponding index in ticketState is set to true.
  const [ticketState, setTicketState] = useState(initialTicketState);

  //mark the clicked index as checked/true only if the clicked element is the current
  //called element or has been called.
  const onElementClick = (index, isCalled) => {
    if (isCalled) {
      const currentTicket = [...ticketState];
      currentTicket[index] = true;
      setTicketState(currentTicket);
      const result = checkBingo(currentTicket, index);
      setBingoElements(result);
    }
  };

  const isBingoElement = (index) => {
    return bingoElements != null &&
      bingoElements.length !== 1 &&
      bingoElements.includes(index)
      ? true
      : false;
  };

  const isLastForBingo = (index) => {
    var x= bingoElements != null &&
      bingoElements.length === 1 &&
      bingoElements.includes(index)
      ? true
      : false;

      console.log(x);
      return x;
  };

  const showTicketElements = () => {
    return ticketElements.map((element, index) => {
      const isCalled = calledCities.includes(ticketElements[index]);
      //render bingo image at ticket's center
      if (index === CENTER_INDEX)
        return (
          <div className="element" key={index}>
            <img className="fittedImage" src={BingoImage} alt="Bingo" />
          </div>
        );
      return (
        <div
          key={index}
          className={`element ${isCalled ? "generated" : ""} ${ticketState[index] ? "clicked" : ""} ${isBingoElement(index) ? "shake" : ""} ${isLastForBingo(index) ? "change-color" : ""}`}
          onClick={() => onElementClick(index, isCalled)}
        > 
          {element}
        </div>
      );
    });
  };

  return <div className="grid container">{showTicketElements()}</div>;
};

Ticket.propTypes = {
  ticketElements: PropTypes.array,
  calledCities: PropTypes.array,
};

export default Ticket;
