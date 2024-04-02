import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import APVW from './addPrimaryVariableWeapon.js';
import APW from './addVariableWeapon.js';

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
        APW(weapon, weapon.w1, weapon.size1, gridValues);
      }
    };
  }
  if (weapon.w2 !== null) {
    if (weapon.size2 === null) {
      let variety = weaponSkills[weapon.w2][weapon.max_level] || weaponSkills[weapon.w2]["value"];
      gridValues[weaponSkills[weapon.w2].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w2) >= 0) {
        APVW(weapon, weapon.w2, weapon.size2, gridValues);
      } else if (VWS[weapon.w2]) {
        APW(weapon, weapon.w2, weapon.size2, gridValues);
      }
    };
  };
  if (weapon.w3 !== null) {
    if (weapon.size3 === null) {
      let variety = weaponSkills[weapon.w3][weapon.max_level] || weaponSkills[weapon.w3]["value"];
      gridValues[weaponSkills[weapon.w3].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w3) >= 0) {
        APVW(weapon, weapon.w3, weapon.size3, gridValues);
      } else if (VWS[weapon.w3]) {
        APW(weapon, weapon.w3, weapon.size3, gridValues);
      }
    }
  };
};

export default HAS;