const CustomError = require("../extensions/custom-error");

const LATIN_ARRAY = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const LATIN_COUNT = 26;

let latinMatrix = [['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']];
let latinReg = /[A-Z]/

for (let i = 1; i < 26; i++) {
  latinMatrix.push(LATIN_ARRAY.slice(i).concat(LATIN_ARRAY.slice(0, i)))
}

class VigenereCipheringMachine {

  constructor(bool) {
    this.bool = bool
  }

  encrypt = (message, key) => {
    if(!message || !key) throw new Error();
    key = key.toUpperCase();
    message = message.toUpperCase();
    let resultArr = []
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (latinReg.test(message[i])) {
        resultArr.push(latinMatrix[LATIN_ARRAY.indexOf(message[i])][LATIN_ARRAY.indexOf(key[j % key.length])]);
      } else {
        resultArr.push(message[i])
        j--
      }
    }
    if (this.bool === false) {
      return resultArr.reverse().join('')
    } else {
      return resultArr.join('')
    }
  }

  decrypt = (message, key) => {
    if(!message || !key) throw new Error();
    key = key.toUpperCase();
    message = message.toUpperCase();
    let resultArr = []
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (latinReg.test(message[i])) {
        resultArr.push(LATIN_ARRAY[latinMatrix[LATIN_ARRAY.indexOf(key[j % key.length])].indexOf(message[i])]);
      } else {
        resultArr.push(message[i])
        j--
      }
    }
    if (this.bool === false) {
      return resultArr.reverse().join('')
    } else {
      return resultArr.join('')
    }
  }
}

module.exports = VigenereCipheringMachine;
