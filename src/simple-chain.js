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
    if (!Number(position) || position > this.state.length || position < 1) {
      this.state = [];
      throw new Error();
    } else if (Number(position)) {
      this.state.splice(position - 1, 1);
      return this
    }
  },
  reverseChain() {
    this.state.reverse();
    return this
  },
  finishChain() {
    const finish = this.state.join(('~~'));
    this.state = [];
    return finish;
  }
};

module.exports = chainMaker;
