import React, { useState, useEffect } from 'react';
import Weapon from './miniComponents/Weapon.jsx';

const WeaponList = ({ weapons, addWeapon, filter }) => {
  const weaponBoat = [];
  let weaponDinghy = [];

  for (var i = 0; i < weapons.length; i++) {
    if (filter === 'all') {
      weaponDinghy.push(<Weapon weapon={weapons[i]} changeGrid={addWeapon}/>);
      if (weaponDinghy.length === 5 || i+1 === weapons.length) {
        weaponBoat.push(<div className="weaponBoat">{weaponDinghy}</div>);
        weaponDinghy = [];
      }
    } else {
      if (weapons[i].element === filter) {
        weaponDinghy.push(<Weapon weapon={weapons[i]} changeGrid={addWeapon}/>);
      }
      if (weaponDinghy.length === 5 || i+1 === weapons.length) {
        weaponBoat.push(<div className="weaponBoat">{weaponDinghy}</div>);
        weaponDinghy = [];
      }
    }
  }
  return (
    <ul className="weaponList">
      {weaponBoat}
    </ul>
  )
};

export default WeaponList;