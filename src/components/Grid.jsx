import React, { useState } from 'react';
import Weapon from './miniComponents/Weapon.jsx';

const Grid = ({ grid, mainHand, removeWeapon, removeMH }) => {
  const [might, setMight] = useState(0);
  const [omegaMight, setOmegaMight] = useState(0);


  const onMainHandClick = () => {
    removeMH();
  }
  const onGridWeaponClick = (weapon) => {
    removeWeapon(weapon);
  };

  return (
    <div className="grid">
      <h2>Main Hand</h2>
      <Weapon weapon={mainHand} changeGrid={onMainHandClick}/>
      <h3>Grid pieces</h3>
      {grid.map((piece) => {
        return <Weapon weapon={piece} changeGrid={onGridWeaponClick}/>
      })}
    </div>
  )
}

export default Grid;