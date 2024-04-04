import HAS from './haveASkill.js';

const constructGridValues = (mainHand, grid, gridValues, mainSummon, subSummon, friendSummon) => {
  if (Object.keys(gridValues).length > 0) {

    if (Object.keys(mainHand).length > 0) {
      HAS(mainHand, gridValues, mainSummon, subSummon, friendSummon);
    };
    if (grid.length >= 1) {
      for (var i = 0; i < grid.length; i ++) {
        HAS(grid[i], gridValues, mainSummon, subSummon, friendSummon);
      };
    };
  }
};

export default constructGridValues;