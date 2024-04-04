import React, { useState } from 'react';
import Weapon from './miniComponents/Weapon.jsx';

const WeaponGrid = ({ grid, mainHand, removeWeapon, removeMH }) => {

  const onMainHandClick = () => {
    removeMH();
  }
  const onGridWeaponClick = (weapon) => {
    removeWeapon(weapon);
  };

  return (
    <div className="weaponGrid">
      <h2>Main Hand</h2>
      <Weapon weapon={mainHand} changeGrid={onMainHandClick}/>
      <h3>Grid pieces</h3>
      <div className="coreGrid">
        {grid.map((piece) => {
          return <Weapon weapon={piece} changeGrid={onGridWeaponClick}/>
        })}
      </div>
    </div>
  )
}

export default WeaponGrid;