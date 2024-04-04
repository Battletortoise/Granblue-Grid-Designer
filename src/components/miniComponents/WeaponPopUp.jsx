import React, {useState} from 'react';

const WeaponPopUp = ({weapon}) => {
  let w1;
  let w2;
  let w3;

  if (weapon.w1 === null) {
    w1 = false;
  } else if (weapon.w2 === null) {
    w2 = false;
  } else if (weapon.w3 === null) {
    w3 = false;
  }
  return (
    <div className="weaponPopUp">
      {weapon.w1 !== 'null' && <div>{weapon.w1}</div>}
      {weapon.w2 !== 'null' && <div>{weapon.w2}</div>}
      {weapon.w3 !== 'null' && <div>{weapon.w3}</div>}
    </div>
  );
};

export default WeaponPopUp;