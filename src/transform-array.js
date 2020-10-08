const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let action = String(arr.filter(element => typeof element == 'string'));
  // console.log(action);
  // console.log(arr.indexOf(action));

  if(arr.indexOf(action) == 0){
    arr.splice(0, 1);
  }
  else if(arr.indexOf(action) == arr.length -1){
    arr.splice(arr.indexOf(action -1, 1));
  }
  else{
    switch (action) {
      case '--discard-next':
        arr.splice(arr.indexOf(action), 2);
        break;

      case '--discard-prev':
        arr.splice(arr.indexOf(action)-1, 2);
        break;

      case '--double-next':
        arr.splice(arr.indexOf(action), 1, arr.indexOf(action)+1);
        break;
    
      case '--double-prev':
        arr.splice(arr.indexOf(action), 1, arr.indexOf(action));
        break;
    
      default:
        break;
    }
  }
  return arr;
};
