const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const result = members.filter(item => typeof item === 'string')
      .map(item => item.trim().slice(0, 1).toUpperCase()).sort().join('')
  return result
};
