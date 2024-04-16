import React, { useState, useEffect } from 'react';
import Weapon from './miniComponents/Weapon.jsx';

const WeaponList = ({ weapons, addWeapon }) => {
  const weaponBoat = [];
  let weaponDinghy = [];

  for (var i = 0; i < weapons.length; i++) {
    weaponDinghy.push(<Weapon weapon={weapons[i]} changeGrid={addWeapon}/>);
    if (weaponDinghy.length === 5 || i+1 === weapons.length) {
      console.log(weaponDinghy, weaponBoat);
      weaponBoat.push(<div className="weaponBoat">{weaponDinghy}</div>);
      weaponDinghy = [];
    }
  }
  return (
    <ul className="weaponList">
      {weapons.map((weapon) => {
        return <Weapon weapon={weapon} changeGrid={addWeapon}/>
      })}
    </ul>
  )
};

export default WeaponList;