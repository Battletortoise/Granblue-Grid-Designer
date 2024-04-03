import React, { useState, useEffect } from 'react';
import Summon from './miniComponents/Summon.jsx';

const SummonList = ({ summons, addSummon }) => {
  const summonBoat = [];
  let summonDinghy = [];
  console.log(summons);

  const onSummonClick = (summon) => {
    addSummon(summon);
  }

  for (var i = 0; i < summons.length; i++) {
    summonDinghy.push(<Summon summon={summons[i]} click={onSummonClick}/>);
    if ((i+1) % 5 === 0 || i+1 === summons.length) {
      summonBoat.push(<div className="summonBoat">{summonDinghy}</div>);
      summonDinghy = [];
    }
  }
  return (
    <ul className="summonList">
      {summonBoat}
    </ul>
  )
};

export default SummonList;