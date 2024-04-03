import React, {useState} from 'react';

const WeaponPopUp = ({weapon}) => {
  return (
    <div>
      {weapon.w1 !== null && <div>{weapon.w1}</div>}
      {weapon.w2 !== null && <div>{weapon.w2}</div>}
      {weapon.w3 !== null && <div>{weapon.w3}</div>}
    </div>
  );
};

export default WeaponPopUp;