const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const result = {
    turns: 0,
    seconds: 0
  }

  const towerOfHanoi = (n, source = 'A',auxiliary = 'B', destination = 'C') => {
    if (n === 1) {
      result.turns += 1;
    } else {
      towerOfHanoi(n - 1, source, destination, auxiliary);
      towerOfHanoi(n - 1, auxiliary, source, destination);
      result.turns +=1
    }
  }

  towerOfHanoi(disksNumber)
  result.seconds =  Math.floor(result.turns / (turnsSpeed / 3600))
  return  result
}
