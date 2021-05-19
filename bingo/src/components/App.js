import React, { useState, useEffect } from "react";
import Ticket from "./Ticket";
import EditPlayers from "./EditPlayers";
import GenerateCityNames from "./GenerateCityNames";
import DisplayCalledNames from "./DisplayCalledNames";
import { generateRandomSequence } from "../util/utilities";
import "../styles/app.css";

const App = () => {
  const [totalPlayers, setTotalPlayers] = useState(1);
  const [tickets, setTickets] = useState([]);
  const [calledCities, setCalledCities] = useState([]);

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

  return (
    <div>
      <h1 className="heading">Travel Bingo!</h1>
      <EditPlayers changeTotalPlayers={setTotalPlayers} />
      <div className="flex-container">
        <div className="flex-item-left">
          <GenerateCityNames
            // calledCity={calledCity}
            updateCalledCities={updateCalledCities}
          />
          <DisplayCalledNames calledCityNames={calledCities} />
        </div>
        <div className="flex-item-right">
          {tickets.map((citiesList, index) => {
            return (
              <Ticket
                key={index}
                ticketElements={citiesList}
                currentCalledName={calledCities[calledCities.length - 1]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
