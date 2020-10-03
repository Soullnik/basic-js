const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let result = '';
    str = `${str}`
    const staRepeated = (str, repeatTime, separator = '+', additionSeparator = '|') => {
        str = `${str}`
        const arrayStr = new Array(repeatTime);
        if(additionSeparator && str) {
            return arrayStr.fill(str).join(additionSeparator)
        } else {
            return arrayStr.fill(str).join(separator)
        }
    }

    if (options.addition !== 0 && options.addition !== undefined) {
        result = `${str}${staRepeated(options.addition, options.additionRepeatTimes,'', options.additionSeparator)}`
        result = `${staRepeated(result, options.repeatTimes, options.separator, '')}`
    } else {
        result = `${staRepeated(str, options.repeatTimes, options.separator, '')}`
    }
    return result
};
  