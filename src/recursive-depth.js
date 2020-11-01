const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const innArrays = [0];
    for (const elem of arr) {
      if (Array.isArray(elem)) {
        innArrays.push(this.calculateDepth(elem));
      }
    }
    return Math.max(...innArrays) + 1;
  }
};