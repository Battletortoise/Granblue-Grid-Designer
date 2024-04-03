import HAS from './doesItHaveASkill.js';

const constructGridValues = (mainHand, grid, gridValues) => {
  if (Object.keys(gridValues).length > 0) {

    if (Object.keys(mainHand).length > 0) {
      HAS(mainHand, gridValues);
    };
    if (grid.length >= 1) {
      for (var i = 0; i < grid.length; i ++) {
        HAS(grid[i], gridValues);
      };
    };
  }
};

export default constructGridValues;