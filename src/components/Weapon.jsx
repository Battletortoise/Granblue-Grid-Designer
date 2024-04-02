import React from 'react';

const Weapon = ({ weapon }) => {
  console.log(weapon.thumbnail);
  const style = {
    backgroundImage: `url(${weapon.thumbnail})`,
    height: '34.5px',
    width: '60px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    margin: '1%'
  }
  return (
    <div style={ style }></div>
  )
};

export default Weapon;