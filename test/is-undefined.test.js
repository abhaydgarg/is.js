const chai = require('chai');
const isUndefined = require('../src/is-undefined');

describe('isUndefined [/src/is-undefined.js]', function () {

  it('should be undefined', function () {
    chai.assert.strictEqual(isUndefined(undefined), true);
  });

});
