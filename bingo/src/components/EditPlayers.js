import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/editPlayers.css";

const DEFAULT_NUMBER_OF_PLAYERS = 1;

const EditPlayers = ({ changeTotalPlayers }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(
    DEFAULT_NUMBER_OF_PLAYERS
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    changeTotalPlayers(numberOfPlayers);
  };

  const onInputTextChange = (e) => {
    setNumberOfPlayers(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="margined">
          <label className="text gray-text">Number of players: </label>
        </div>

        <input
          className="inputText"
          type="number"
          min={1}
          value={numberOfPlayers}
          onChange={onInputTextChange}
          data-testid="numberInput"
        />

        <button className="button text gray-text bold" onClick={onFormSubmit}>
          Show Tickets
        </button>
        <hr />
      </form>
    </div>
  );
};

EditPlayers.propTypes = {
  changeTotalPlayers: PropTypes.func,
};

export default EditPlayers;
