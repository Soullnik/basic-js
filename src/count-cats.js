const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    let countCats = 0;
    matrix.forEach( (item) => {
        item.forEach(item => {
            if (item === ('^^' || '^ ^')) {
                countCats += 1;
            }
        })
    })
    return countCats
};
