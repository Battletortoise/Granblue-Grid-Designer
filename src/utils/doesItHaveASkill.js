import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import APVW from './addPrimaryVariableWeapon.js';

const omegaTypes = ["ironflame", "oceansoul", "lifetree", "stormwyrm", "knightcode", "mistfall"];
const normalTypes = ["fire", "water", "earth", "wind", "light", "dark"];
const basicSkills = ["Might", "Aegis", "Celere", "Stamina"];

const HAS = function (weapon, gridValues) {
  if (weapon.w1 !== null) {
    if (weapon.size1 === null) {
      let variety = weaponSkills[weapon.w1][weapon.max_level] || weaponSkills[weapon.w1]["value"];
    } else {
      if (basicSkills.indexOf(weapon.w1) >= 0) {
        APVW(weapon, weapon.w1, weapon.size1, gridValues);
      } else if (VWS[weapon.w1]) {
        gridValues[(VWS[weapon.w1].stat)] += VWS[weapon.w1][weapon.size1][weapon.max_level];
      }
    };
  }
  if (weapon.w2 !== null) {
    if (weapon.size2 === null) {
      let variety = weaponSkills[weapon.w2][weapon.max_level] || weaponSkills[weapon.w2]["value"];
      gridValues[weaponSkills[weapon.w2].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w2) >= 0 && normalTypes.indexOf(weapon.s_type) >= 0) {
        gridValues[(VWS[weapon.w2].stat + '_N')] += VWS[weapon.w2]["normal"][weapon.size2][weapon.max_level];
      } else if (basicSkills.indexOf(weapon.w2) >= 0 && omegaTypes.indexOf(weapon.s_type) >= 0) {
        gridValues[(VWS[weapon.w2].stat + '_O')] += VWS[weapon.w2]["omega"][weapon.size2][weapon.max_level];
      } else if (basicSkills.indexOf(weapon.w2) >= 0 && weapon.s_type === "ex") {
        gridValues[(VWS[weapon.w2].stat)] += VWS[weapon.w2]["ex"][weapon.size2][weapon.max_level];
      } else if (VWS[weapon.w2]) {
        gridValues[(VWS[weapon.w2].stat)] += VWS[weapon.w2][weapon.size2][weapon.max_level];
      }
    };
  };
  if (weapon.w3 !== null) {
    if (weapon.size3 === null) {
      let variety = weaponSkills[weapon.w3][weapon.max_level] || weaponSkills[weapon.w3]["value"];
      gridValues[weaponSkills[weapon.w3].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w3) >= 0 && normalTypes.indexOf(weapon.s_type) >= 0) {
        gridValues[(VWS[weapon.w3].stat + '_N')] += VWS[weapon.w3]["normal"][weapon.size3][weapon.max_level];
      } else if (basicSkills.indexOf(weapon.w3) >= 0 && omegaTypes.indexOf(weapon.s_type) >= 0) {
        gridValues[(VWS[weapon.w3].stat + '_O')] += VWS[weapon.w3]["omega"][weapon.size3][weapon.max_level];
      } else if (basicSkills.indexOf(weapon.w3) >= 0 && weapon.s_type === "ex") {
        gridValues[(VWS[weapon.w3].stat)] += VWS[weapon.w3]["ex"][weapon.size3][weapon.max_level];
      } else if (VWS[weapon.w3]) {
        gridValues[(VWS[weapon.w3].stat)] += VWS[weapon.w3][weapon.size3][weapon.max_level];
      }
    }
  };
};

export default HAS;