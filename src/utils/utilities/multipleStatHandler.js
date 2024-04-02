const MSH = (statArray, valueArray, suffix, gridValues) => {
  for (var i = 0; i < statArray.length; i ++) {
    gridValues[statArray[i] + suffix] += valueArray[i];
  }
};

export default MSH;