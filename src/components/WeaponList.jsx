import React, { useState, useEffect } from 'react';
import Weapon from './Weapon.jsx';

const WeaponList = ({ weapons, add }) => {
  return (
    <div className="weaponList">
      {weapons.length > 0 && weapons.map((weapon) => {
        return <Weapon weapon={weapon} add={add}/>
      })}
    </div>
  )
};

export default WeaponList;