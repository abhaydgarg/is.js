const chai = require('chai');
const isNull = require('../src/is-null');

describe('isNull [/src/is-null.js]', function () {

  it('should be null', function () {
    chai.assert.strictEqual(isNull(null), true);
  });

});
