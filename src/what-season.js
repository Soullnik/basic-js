const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {date.getTime()} catch (err) {throw new Error (err)}

  let dm = date.getMonth() + 1;

  if(dm === 12 || (
      dm >= 1 && dm <= 2 )) {
    return 'winter'
  } else if (dm >= 3 && dm <= 5) {
    return 'spring'
  } else if (dm >= 6 && dm <= 8) {
    return 'summer'
  } else {
    return 'autumn'
  }
};
