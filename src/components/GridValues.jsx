import React, { useState, useEffect } from 'react';
import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import newGridStates from '../data/newGridState.js';
import constructGridValues from '../utils/constructGridValues.js';
import constructDisplayValues from '../utils/constructDisplayValues.js';

const GridValues = ({ grid, mainHand, mainSummon, subSummons, friendSummon }) => {
  const [gridValues, setGridValues] = useState({});
  const [finalGridValues, setFinalGridValues] = useState({});
  const [display, setDisplay] = useState({});

  const setDisplayValues = (displayValues) => {
    setDisplay(displayValues);
  };

  useEffect(() => {
    setGridValues(structuredClone(newGridStates));
    constructGridValues(mainHand, grid, gridValues, mainSummon, subSummons, friendSummon);
    constructDisplayValues(gridValues, setDisplayValues);
  }, [grid, mainHand, mainSummon, subSummons, friendSummon]);

  return (
    <div className="gridValues">
      {Object.keys(display).map((key) => {
        if (display[key].value > 0) {
          return <div><img src={display[key].thumbnail}></img>{display[key].value}%</div>
        }
      })}
    </div>
  )
};

export default GridValues;
