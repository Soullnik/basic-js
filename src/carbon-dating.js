const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity === 'string'
      && (sampleActivity > 0 && sampleActivity < 14) ) {
    if (isNaN(Number(sampleActivity)) || Number(sampleActivity) === 0) return false;
    result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
    return result;
  }
  return false
};
