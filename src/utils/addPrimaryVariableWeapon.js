import weaponSkills from '../data/weaponSkills.js';
import VWS from '../data/variableWeaponSkills.js';

const omegaTypes = ["ironflame", "oceansoul", "lifetree", "stormwyrm", "knightcode", "mistfall"];
const normalTypes = ["fire", "water", "earth", "wind", "light", "dark"];

const APVW = (weapon, w, s, gridValues) => {
  if (normalTypes.indexOf(weapon.s_type) >= 0) {
    gridValues[(VWS[weapon[w]].stat + '_N')] += VWS[weapon[w]]["normal"][weapon[s]][weapon.max_level];
  } else if (omegaTypes.indexOf(weapon.s_type) >= 0) {
    gridValues[(VWS[weapon[w]].stat + '_O')] += VWS[weapon[w]]["omega"][weapon[s]][weapon.max_level];
  } else if (weapon.s_type === "ex") {
    gridValues[(VWS[weapon[w]].stat)] += VWS[weapon[w]]["ex"][weapon[s]][weapon.max_level];
  }
};