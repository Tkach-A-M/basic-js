const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string'){
   return false;
  }
  if (isNaN(sampleActivity)){
    return false;
  }
  if (Number(sampleActivity) > MODERN_ACTIVITY){
    return false;
  }
  if (Number(sampleActivity) <= 0 ){
    return false;
  }
  const k = Math.LN2 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
  
};
