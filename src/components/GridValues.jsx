import React, { useState, useEffect } from 'react';
import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import newGridStates from '../data/newGridState.js';
import constructGridValues from '../utils/constructGridValues.js';
import constructDisplayValues from '../utils/constructDisplayValues.js';

const GridValues = ({ grid, mainHand }) => {
  const [gridValues, setGridValues] = useState({});
  const [finalGridValues, setFinalGridValues] = useState({});
  const [display, setDisplay] = useState({});

  const setDisplayValues = (displayValues) => {
    setDisplay(displayValues);
  };

  // constructGridValues(mainHand, grid, gridValues, setDisplayValues);

  useEffect(() => {
    setGridValues(structuredClone(newGridStates));
    constructGridValues(mainHand, grid, gridValues);
    setFinalGridValues(gridValues);
    console.log(display);
  }, [grid, mainHand]);

  useEffect(() => {
    if (Object.keys(finalGridValues).length > 0) {
      constructDisplayValues(finalGridValues, setDisplayValues);
    }
  }, [finalGridValues])


  return (
    <div className="gridValues">
      {Object.keys(display).map((key) => {
        if (display[key].value > 0) {
          return <div><img src={display[key].thumbnail}></img>{display[key].value}</div>
        }
      })}
    </div>
  )
};

export default GridValues;
