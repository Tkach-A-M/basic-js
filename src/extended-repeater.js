const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let inStr = typeof str !== 'string' ? String(str) : str;
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = options.addition === undefined ? '' : String(options.addition);
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';
    let additions = [];
    let finalAdditions = '';
    let resString = [];

    for(let i = 0; i < additionRepeatTimes; i++){
        additions.push(addition);
    }

    finalAdditions = additions.join(additionSeparator);

    for(let i = 0; i < repeatTimes; i++){
        resString.push(inStr + finalAdditions);
    }

    return resString.join(separator);
};