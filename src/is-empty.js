const isString = require('./is-string');
const isArray = require('./is-array');
const isNullOrUndefined = require('./is-null-or-undefined');
const isNumber = require('./is-number');
const isObject = require('./is-object');
const isError = require('./is-error');
const isFunction = require('./is-function');
const isSet = require('./is-set');
const isMap = require('./is-map');

module.exports = function isEmpty(val, considerEmpty = null) {

  // null and undefined are empty
  if (isNullOrUndefined(val) === true) {
    return true;
  }

  // function with length 0 is empty
  if (isFunction(val) === true) {
    return val.length === 0;
  }

  // array with length 0 is empty
  if (isArray(val) === true) {
    return val.length === 0;
  }

  // error with no message is empty
  if (isError(val) === true) {
    return val.message === '';
  }

  // Set with size 0 is empty
  if (isSet(val) === true) {
    return val.size === 0;
  }

  // Map with size 0 is empty
  if (isMap(val) === true) {
    return val.size === 0;
  }

  // Object without own property is empty
  if (isObject(val) === true) {
    for (var prop in val) {
      if (val.hasOwnProperty(prop))
        return false;
    }
    return true;
  }

  // number 0 is consider empty
  if (isNumber(val) === true) {
    if (val === 0) {
      return true;
    }
    return false;
  }

  // string with length 0 is empty
  // whitespace string is consider empty
  if (isString(val) === true) {
    val = val.trim();
    return val.length === 0;
  }

  return false;

};
