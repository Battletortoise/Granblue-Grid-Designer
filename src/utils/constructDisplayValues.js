import newDisplayGrid from '../data/newDisplayGrid.js';
import MSA from './utilities/multipleStatAdder.js';

const separateSkills = ["attack", "stamin", "emnity"];

const constructDisplayValues = (gridValues, setDisplay) => {
  let newDisplay = structuredClone(newDisplayGrid);

  let skills = Object.keys(newDisplay);
  for (var key in newDisplay) {
    if (separateSkills.indexOf(key.slice(0,6)) >= 0) {
      newDisplay[key].value = gridValues[key];
    } else {
      MSA(key, newDisplay, gridValues, 1, 1)
    }
  }
  console.log(newDisplay);
  setDisplay(newDisplay);
};

export default constructDisplayValues;
