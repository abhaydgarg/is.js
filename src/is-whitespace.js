const isString = require('./is-string');

module.exports = function isWhitespace(val) {
  if (isString(val) === false) {
    throw new TypeError('Argument is not of type string');
  }
  val = val.trim();
  return val.length === 0;
};
