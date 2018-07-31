const isNumber = require('./is-number');

module.exports = function isInteger(val) {
  if (!isNumber(val) === true) {
    return false;
  }
  if (val % 1 === 0) {
    return true;
  }
  return false;
};
