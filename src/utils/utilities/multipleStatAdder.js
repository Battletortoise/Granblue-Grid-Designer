const MSA = (key, display, gridValues) => {
  let currentValue = 0;
  if (gridValues[key+'_O'] > 0) {
    currentValue += (Math.floor(gridValues[key+'_O'] * 10) / 10);
  }
  if (gridValues[key+'_N'] > 0) {
    currentValue += (Math.floor(gridValues[key+'_N'] * 10) / 10);
  }
  if (gridValues[key] > 0) {
    currentValue += (Math.floor(gridValues[key] * 10) / 10);
  }
  display[key].value = currentValue;
};

export default MSA;