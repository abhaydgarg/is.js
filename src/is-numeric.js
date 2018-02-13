const isNumber = require('./is-number');
const isString = require('./is-string');

/**
 * [!] Only check for number type and string type because isNaN() has weird behavior.
 * Check out comment and link below.
 * [i] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 *
 * All of them below consider number
 * isNaN([]); false - convert to 0 behind scene
 * isNaN(null); false - convert to 0 behind scene
 * isNaN(true); false - convert to 0 behind scene
 * isNaN(false); false - convert to 0 behind scene
 * isNaN(new Date()); false
 */
module.exports = function isNumeric(val) {
  if (isNumber(val) === true) {
    return true;
  }

  // isNaN(''); false: the empty string is converted to 0 which is not NaN
  // isNaN(' '); false: a string with spaces is converted to 0 which is not NaN
  if (isString(val) === true) {
    val = val.trim();
    if (val === '') {
      return false;
    }
    return !isNaN(val);
  }
  return false;
};
