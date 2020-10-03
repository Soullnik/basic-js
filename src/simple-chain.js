const CustomError = require("../extensions/custom-error");

const chainMaker = {
  state: [],


  getLength() {
    return this.state.length
  },
  addLink(value = '( )') {
    this.state.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    this.state.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.state.reverse();
    return this
  },
  finishChain() {
    return this.state.join('~~')
  }
};

module.exports = chainMaker;
