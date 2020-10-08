const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    // console.log(Array.isArray(members));
    if(Array.isArray(members)){
        let stringsArray = members.filter(member => typeof member === 'string');
        console.log(stringsArray);
        for(let i = 0; i < stringsArray.length; i++){stringsArray[i] = stringsArray[i].trim();}
        console.log(stringsArray.sort());
        let dreamTeamName = [];
        stringsArray.forEach(item => dreamTeamName.push(item[0].toUpperCase()));
        dreamTeamName.sort();
        return dreamTeamName.join("");
    }
    else{
        return false;
    }


        // if(Array.isArray(members)){
        //     let r = members.filter(member => typeof member === 'string').sort();
        //     console.log(r);
        //     r.forEach(element => element.trim());
        //     console.log(r);
        //     let t = [];
        //     r.forEach(item => t.push(item[0].toUpperCase()));
        //     return t.join("");
        // }
        // else{
        //     return false;
        // }

};
