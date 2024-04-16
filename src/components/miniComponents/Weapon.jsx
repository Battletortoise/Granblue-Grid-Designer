import React, {useState, useEffect} from 'react';
import WeaponPopUp from './WeaponPopUp.jsx';

const Weapon = ({ weapon, changeGrid }) => {
  const [currentWeapon, setCurrentWeapon]= useState({});
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setCurrentWeapon(weapon);
  }, []);

  const mouseEnter = () => {
    setShowPopUp(false);
  };
  const mouseLeave = () => {
    setShowPopUp(false);
  };

  const style = {
    backgroundImage: `url(${weapon.thumbnail})`
  }

  const onWeaponClick = () => {
    console.log(currentWeapon);
    changeGrid(currentWeapon);
  }
  return (
    <div className="weapon" style={ style } onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={onWeaponClick}>{showPopUp && <WeaponPopUp weapon={weapon}/>}</div>
  )
};

export default Weapon;