const CustomError = require("../extensions/custom-error");

const chainMaker = {
  myChain: [],
  getLength() {
    return this.myChain.length;
  },
  addLink(value) {
    if(value === undefined){
      value = '';
    }
    this.myChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!Number.isNaN(parseFloat(position)) && parseFloat(position) % 1 === 0 && !(position < 1 || position > this.myChain.length)){
      this.myChain.splice(position - 1, 1);
      return this;
    }
    this.myChain = [];
    throw new Error();
  },
  reverseChain() {
    this.myChain.reverse();
    return this;
  },
  finishChain() {
    const res = `${this.myChain.join('~~')}`;
    this.myChain = [];
    return res;
  }
};

module.exports = chainMaker;
