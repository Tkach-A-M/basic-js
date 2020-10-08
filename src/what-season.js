const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {   
    if(!date){
        return 'Unable to determine the time of year!';
    }
    else if(Object.prototype.toString.call(date) !== '[object Date]'){
        throw new Error();
    }
    else{
        // console.log('i can!');
        switch (date.getMonth()) {
            case 0:
            case 1:
            case 11:
                console.log('winter');
                return 'winter';

            case 2:
            case 3:
            case 4:
                console.log('spring');
                return 'spring';
            case 5:
            case 6:
            case 7:
                console.log('summer');
                return 'summer';
            case 8:
            case 9:
            case 10:
                console.log('autumn');
                return 'autumn';
            default:
                break;
        }
     }
};
