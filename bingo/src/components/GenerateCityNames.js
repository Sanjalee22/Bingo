import React, { useState } from "react";
import PropTypes from "prop-types";
import { allElements } from "../util/constants";

const GenerateCityNames = ({ updateCalledCities }) => {
  const [cityNameList, setCityNameList] = useState([...allElements]);

  const onButtonClick = () => {
    if (cityNameList.length === 0) updateCalledCities("That was all we had...");
    else {
      const allElementsClone = [...cityNameList];
      const random = Math.floor(Math.random() * allElementsClone.length);
      updateCalledCities(allElementsClone[random]);
      allElementsClone.splice(random, 1);
      setCityNameList(allElementsClone);
    }
  };

  return (
    <div className="container">
      <button className="button text bold" onClick={onButtonClick}>
        Pick a City
      </button>
    </div>
  );
};

GenerateCityNames.propTypes = {
  updateCalledCities: PropTypes.func,
};

export default GenerateCityNames;
