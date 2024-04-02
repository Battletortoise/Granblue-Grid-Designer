import React, { useState } from 'react';
import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import newGridStates from '../data/newGridState.js';

const GridValues = ({ grid }) => {
  const [gridValues, setGridValues] = useState(structuredClone(newGridStates));

  let skillValues = {"attack": 0, "crit": 0}
  for (var i = 0; i < grid.length; i ++) {

  }



  return (
    <div className="gridValues">Attack</div>
  )
};

export default GridValues;
