import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';

const omegaTypes = ["ironflame", "oceansoul", "lifetree", "stormwyrm", "knightcode", "mistfall"];
const normalTypes = ["fire", "water", "earth", "wind", "light", "dark"];

const APVW = (weapon, w, s, gridValues, aura, type) => {
  let boostAura = aura / 100;
  if (normalTypes.indexOf(weapon.s_type) >= 0) {
    if (weapon.s_type === type) {
      gridValues[(VWS[w].stat + '_N')] += (VWS[w]["normal"][s][weapon.max_level] * boostAura);
    } else {
      gridValues[(VWS[w].stat + '_N')] += VWS[w]["normal"][s][weapon.max_level];
    }
  } else if (omegaTypes.indexOf(weapon.s_type) >= 0) {
    if (weapon.s_type === type) {
      gridValues[(VWS[w].stat + '_O')] += (VWS[w]["omega"][s][weapon.max_level] * boostAura);
    } else {
      gridValues[(VWS[w].stat + '_O')] += VWS[w]["omega"][s][weapon.max_level];
    }
  } else if (weapon.s_type === "ex") {
    gridValues[(VWS[w].stat)] += VWS[w]["ex"][s][weapon.max_level];
  }
};

export default APVW;