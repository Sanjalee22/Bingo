import React from "react";
import PropTypes from "prop-types";
import "../styles/displayCalledNames.css";

const DisplayCalledNames = ({ calledCityNames }) => {
  //last element in calledCityNames array is the current called name
  const currentName = calledCityNames[calledCityNames.length - 1];
  const pastNames = calledCityNames.slice(0, calledCityNames.length - 1);
  return (
    <div>
      <div>
        <label className="container text gray-text bold">{currentName}</label>
      </div>
      <div>
        <ul className="noBullets">
          {pastNames.map((name) => {
            if (name === "That was all we had...") return null;
            return (
              <li key={name} className="list-elements text light-gray-text">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

DisplayCalledNames.propTypes = {
  calledCityNames: PropTypes.array,
};

export default DisplayCalledNames;
