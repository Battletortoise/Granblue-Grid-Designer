import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import APVW from './addPrimaryVariableWeapon.js';
import AVW from './addVariableWeapon.js';

const omegaTypes = ["ironflame", "oceansoul", "lifetree", "stormwyrm", "knightcode", "mistfall"];
const normalTypes = ["fire", "water", "earth", "wind", "light", "dark"];
const basicSkills = ["Might", "Aegis", "Celere", "Stamina"];

const HAS = function (weapon, gridValues, mainSummon, subSummon, friendSummon) {
  let aura = mainSummon.aura;
  let type = mainSummon.type;

  if (friendSummon.type === mainSummon.type) {
    aura += friendSummon.aura;
  }

  if (weapon.w1 !== 'null') {
    if (weapon.size1 === 'null' && weaponSkills[weapon.w1]) {
      let variety = weaponSkills[weapon.w1][weapon.max_level] || weaponSkills[weapon.w1]["value"];
      gridValues[weaponSkills[weapon.w1].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w1) >= 0) {
        APVW(weapon, weapon.w1, weapon.size1, gridValues, aura, type);
      } else if (VWS[weapon.w1]) {
        AVW(weapon, weapon.w1, weapon.size1, gridValues, aura, type);
      }
    };
  }
  if (weapon.w2 !== 'null') {
    if (weapon.size2 === 'null' && weaponSkills[weapon.w2]) {
      let variety = weaponSkills[weapon.w2][weapon.max_level] || weaponSkills[weapon.w2]["value"];
      gridValues[weaponSkills[weapon.w2].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w2) >= 0) {
        APVW(weapon, weapon.w2, weapon.size2, gridValues, aura, type);
      } else if (VWS[weapon.w2]) {
        AVW(weapon, weapon.w2, weapon.size2, gridValues, aura, type);
      }
    };
  };
  if (weapon.w3 !== 'null') {
    if (weapon.size3 === 'null' && weaponSkills[weapon.w3]) {
      let variety = weaponSkills[weapon.w3][weapon.max_level] || weaponSkills[weapon.w3]["value"];
      gridValues[weaponSkills[weapon.w3].stat] += variety;
    } else {
      if (basicSkills.indexOf(weapon.w3) >= 0) {
        APVW(weapon, weapon.w3, weapon.size3, gridValues, aura, type);
      } else if (VWS[weapon.w3]) {
        AVW(weapon, weapon.w3, weapon.size3, gridValues, aura, type);
      }
    }
  };
};

export default HAS;