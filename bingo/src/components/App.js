import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import EditPlayers from "./EditPlayers";
import GenerateCityNames from "./GenerateCityNames";
import DisplayCalledNames from "./DisplayCalledNames";
import { generateRandomSequence } from "../util/utilities";
import "../styles/app.css";

const DEFAULT_NUMBER_OF_PLAYERS = 1;

const App = () => {
  const [totalPlayers, setTotalPlayers] = useState(DEFAULT_NUMBER_OF_PLAYERS);

  //maintain ticket for each player
  const [tickets, setTickets] = useState([]);

  //maintain a list of the city names whicj have been called.
  const [calledCities, setCalledCities] = useState([]);

  //generate a different ticket for each player which should remain the same if app re-renders
  useEffect(() => {
    const tempArray = [];
    for (let i = 0; i < totalPlayers; i++) {
      const ticketElements = generateRandomSequence();
      tempArray.push(ticketElements);
    }
    setTickets([...tempArray]);
  }, [totalPlayers]);

  const updateCalledCities = (e) => {
    setCalledCities([...calledCities, e]);
  };

  const renderTickets = () => {
    return tickets.map((citiesList, index) => {
      return (
        <Ticket
          key={index}
          ticketElements={citiesList}
          calledCities={calledCities}
        />
      );
    });
  };

  return (
    <div>
      <h1 className="heading">Traveller's Bingo!</h1>
      <div className="flex-container">
        <div className="flex-item-left container colored margined">
          <EditPlayers changeTotalPlayers={setTotalPlayers} />
          <GenerateCityNames updateCalledCities={updateCalledCities} />
          <DisplayCalledNames calledCityNames={calledCities} />
        </div>
        <div className="flex-item-right">{renderTickets()}</div>
      </div>
    </div>
  );
};

export default App;
