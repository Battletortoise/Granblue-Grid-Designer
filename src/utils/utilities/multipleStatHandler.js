const MSH = (statArray, valueArray, suffix, gridValues, boostAura) => {
  for (var i = 0; i < statArray.length; i ++) {
    gridValues[statArray[i] + suffix] += (valueArray[i] * boostAura);
  }
};

export default MSH;