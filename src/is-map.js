module.exports = function isMap(val) {
  return Object.prototype.toString.call(val) === '[object Map]';
};
