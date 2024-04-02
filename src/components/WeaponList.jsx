import React, { useState, useEffect } from 'react';
import Weapon from './Weapon.jsx';

const WeaponList = ({ weapons, addWeapon }) => {
  const weaponBoat = [];
  let weaponDinghy = [];

  for (var i = 0; i < weapons.length; i++) {
    weaponDinghy.push(<Weapon weapon={weapons[i]} changeGrid={addWeapon}/>);
    if ((i+1) % 5 === 0 || i+1 === weapons.length) {
      weaponBoat.push(<div className="weaponBoat">{weaponDinghy}</div>);
      weaponDinghy = [];
    }
  }
  return (
    <ul className="weaponList">
      {weaponBoat}
    </ul>
  )
};

export default WeaponList;