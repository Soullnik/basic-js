const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth = (arr) => {
    let levelDepth = 0;

    if (Array.isArray(arr)) {
      arr.forEach(element => levelDepth = Math.max(levelDepth, this.calculateDepth(element)));
      return ++levelDepth;
    } else {
      return 0;
    }
  }
};


