import React, { useState, useEffect } from 'react';
import Weapon from './Weapon.jsx';

const WeaponList = ({ weapons, addWeapon }) => {
  return (
    <ul className="weaponList">
      {weapons.length > 0 && weapons.map((weapon) => {
        return <Weapon weapon={weapon} changeGrid={addWeapon}/>
      })}
    </ul>
  )
};

export default WeaponList;