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

    const onInputTextChange =(e)=>{
      setNumberOfPlayers(e.target.value);
    }

  return (
    <div className="container">
      <form data-testid="form">
        <div>
          <label className="text gray">Number of players: </label>
          <input
            className="inputText"
            type="numeric"
            value={numberOfPlayers}
            onChange={onInputTextChange}
          />
        </div>
        <div>
          <button className="button text gray" onClick={onFormSubmit}>
            Go
          </button>
        </div>
      </form>
    </div>
  );
};

EditPlayers.propTypes={
    changeTotalPlayers: PropTypes.func
}

export default EditPlayers;
