import React, {useState} from 'react';

const Weapon = ({ weapon, add }) => {
  const [currentWeapon, setCurrentWeapon]= useState(weapon);

  const style = {
    backgroundImage: `url(${weapon.thumbnail})`
  }

  const onWeaponClick = function () {
    add(currentWeapon);
  }
  return (
    <div className="weapon" style={ style } onClick={onWeaponClick}></div>
  )
};

export default Weapon;