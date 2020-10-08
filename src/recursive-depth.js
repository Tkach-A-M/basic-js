const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let y = true;
    let c = 1;
    while(y){
      arr = arr.flat();
      if(!arr.some(element => Array.isArray(element))){
        y = false;
      }
      c++;
    }
    return c; 
  }
};