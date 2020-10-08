const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsSpeedSec = turnsSpeed / 3600;
  let turns = (2 ** disksNumber) - 1;
  let seconds = turns / turnsSpeedSec;
  seconds = Math.trunc(seconds);
  return {turns, seconds};
};
