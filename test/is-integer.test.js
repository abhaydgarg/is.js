const chai = require('chai');
const isInteger = require('../src/is-integer');

describe('isInteger [/src/is-integer.js]', function () {

  it('all should be integer', function () {
    chai.assert.deepEqual(
      [
        isInteger(0),
        isInteger(0.0),
        isInteger(0.00),
        isInteger(6.0),
        isInteger(7),
        isInteger(1234567890),
        isInteger(-123),
        isInteger(-1.0)
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ]
    );
  });

});
