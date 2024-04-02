import React, { useState, useEffect } from 'react';
import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import newGridStates from '../data/newGridState.js';
import constructGridValues from '../utils/constructGridValues.js';

const GridValues = ({ grid, mainHand }) => {
  const [gridValues, setGridValues] = useState({});
  const [display, setDisplay] = useState({});

  const setDisplayValues = (displayValues) => {
    setDisplay(displayValues);
  };

  // constructGridValues(mainHand, grid, gridValues, setDisplayValues);

  useEffect(() => {
    setGridValues(structuredClone(newGridStates));
    constructGridValues(mainHand, grid, gridValues, setDisplayValues);
    setDisplay(gridValues);
  }, [grid, mainHand]);


  return (
    <div className="gridValues">
      {Object.keys(display).map((key) => {
        if (display[key] > 0) {
          return <div>{key}: {display[key]}</div>
        }
      })}
    </div>
  )
};

export default GridValues;
