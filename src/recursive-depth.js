const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(this.calculateDepth(val)) : acc.concat(val), [])
  }
};