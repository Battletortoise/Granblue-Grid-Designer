import React, { useState } from 'react';
import Summon from './miniComponents/Summon.jsx';

const SummonGrid = ({ main, subs, removeSub, removeMain }) => {

  const mainStyle = {
    backgroundImage: `url(${main.art})`
  }

  const onMainSummonClick = () => {
    removeMain();
  };
  const onSubSummonClick = (summon) => {
    removeSub(summon);
  };

  return (
    <div>
      <h1>Main Summon</h1>
      <div style={mainStyle} className="mainSummon" onClick={onMainSummonClick}></div>
      <h2>Subs</h2>
      {subs.length > 0 && subs.map((summon) => {
        return <Summon summon={summon} click={onSubSummonClick}/>
      })}
    </div>
  )
}

export default SummonGrid;