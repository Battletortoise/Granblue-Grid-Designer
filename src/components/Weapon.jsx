import React, {useState} from 'react';

const Weapon = ({ weapon, changeGrid }) => {
  const [currentWeapon, setCurrentWeapon]= useState(weapon);

  const style = {
    backgroundImage: `url(${weapon.thumbnail})`
  }

  const onWeaponClick = () => {
    changeGrid(currentWeapon);
  }
  return (
    <div className="weapon" style={ style } onClick={onWeaponClick}></div>
  )
};

export default Weapon;