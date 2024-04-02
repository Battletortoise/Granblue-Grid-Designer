import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';
import MSH from './utilities/multipleStatHandler.js';

const omegaTypes = ["ironflame", "oceansoul", "lifetree", "stormwyrm", "knightcode", "mistfall"];
const normalTypes = ["fire", "water", "earth", "wind", "light", "dark"];

const AVW = (weapon, w, s, gridValues) => {
  if (normalTypes.indexOf(weapon.s_type) >= 0) {
    if (Array.isArray(VWS[w].stat) === true) {
      MSH(VWS[w].stat, VWS[w][s][weapon.max_level], '_N', gridValues);
    } else {
      gridValues[(VWS[w].stat + '_N')] += VWS[w][s][weapon.max_level];
    }
  } else if (omegaTypes.indexOf(weapon.s_type) >= 0) {
    if (Array.isArray(VWS[w].stat) === true) {
      MSH(VWS[w].stat, VWS[w][s][weapon.max_level], '_O', gridValues);
    } else {
      gridValues[(VWS[w].stat + '_O')] += VWS[w][s][weapon.max_level];
    }
  } else if (weapon.s_type === "ex") {
    if (Array.isArray(VWS[w].stat) === true) {
      MSH(VWS[w].stat, VWS[w][s][weapon.max_level], '', gridValues);
    } else {
      gridValues[(VWS[w].stat)] += VWS[w][s][weapon.max_level];
    }
  }
};

export default AVW;
