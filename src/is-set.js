module.exports = function isSet(val) {
  return Object.prototype.toString.call(val) === '[object Set]';
};
