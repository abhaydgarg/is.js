module.exports = function isRegEx(val) {
  return Object.prototype.toString.call(val) === '[object RegExp]';
};
