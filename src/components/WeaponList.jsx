import React, { useState, useEffect } from 'react';
import Weapon from './Weapon.jsx';

const WeaponList = ({ weapons }) => {
  console.log(weapons.length);
  return (
    <div className="weaponList">WeaponList
      {weapons.length > 0 && weapons.map((weapon) => {
        return <Weapon weapon={weapon}/>
      })}
    </div>
  )
};

export default WeaponList;