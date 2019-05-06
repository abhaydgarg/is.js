module.exports = function isError(val) {
  return (Object.prototype.toString.call(val) === '[object Error]' || val instanceof Error);
};
