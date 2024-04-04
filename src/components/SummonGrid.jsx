import React, { useState } from 'react';
import Summon from './miniComponents/Summon.jsx';

const SummonGrid = ({ main, subs, removeSub, removeMain, friend, removeFriend }) => {

  const mainStyle = {
    backgroundImage: `url(${main.art})`
  }
  const friendStyle = {
    backgroundImage: `url(${friend.art})`
  }

  const onMainSummonClick = () => {
    removeMain();
  };
  const onFriendSummonClick = () => {
    removeFriend();
  }
  const onSubSummonClick = (summon) => {
    removeSub(summon);
  };

  return (
    <div className="summonGrid">
      <div className="mainSummonHolder">
      <h1>Main Summon</h1>
      <div style={mainStyle} className="mainSummon" onClick={onMainSummonClick}></div>
      </div>
      <div className="subSummonHolder">
      <h2>Subs</h2>
      {subs.length > 0 && subs.map((summon) => {
        return <Summon summon={summon} click={onSubSummonClick}/>
      })}
      </div>
      <div className="friendSummonHolder">
        <h1>Friend Summon</h1>
        <div style={friendStyle} className="mainSummon" onClick={onFriendSummonClick}></div>
      </div>
    </div>
  )
}

export default SummonGrid;