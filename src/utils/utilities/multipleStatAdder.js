const MSA = (key, display, gridValues, omegaMod, optimusMod) => {
  let currentValue = 0;
  if (gridValues[key+'_O'] > 0) {
    currentValue += (gridValues[key+'_O'] * omegaMod);
  }
  if (gridValues[key+'_N'] > 0) {
    currentValue += (gridValues[key+'_N'] * optimusMod);
  }
  if (gridValues[key] > 0) {
    currentValue += gridValues[key];
  }
  display[key].value = currentValue;
};

export default MSA;