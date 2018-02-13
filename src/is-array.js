module.exports = function isArray(val) {
  if (Array.isArray) {
    return Array.isArray(val);
  }
  return Object.prototype.toString.call(val) === '[object Array]';
};
