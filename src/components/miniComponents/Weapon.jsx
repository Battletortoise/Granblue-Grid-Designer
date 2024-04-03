import React, {useState} from 'react';
import WeaponPopUp from './WeaponPopUp.jsx';

const Weapon = ({ weapon, changeGrid }) => {
  const [currentWeapon, setCurrentWeapon]= useState(weapon);
  const [showPopUp, setShowPopUp] = useState(false);

  const mouseEnter = () => {
    setShowPopUp(true);
  };
  const mouseLeave = () => {
    setShowPopUp(false);
  };


  const style = {
    backgroundImage: `url(${weapon.thumbnail})`
  }

  const onWeaponClick = () => {
    changeGrid(currentWeapon);
  }
  return (
    <div className="weapon" style={ style } onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={onWeaponClick}>{showPopUp && <WeaponPopUp weapon={currentWeapon}/>}</div>
  )
};

export default Weapon;