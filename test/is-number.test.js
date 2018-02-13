const chai = require('chai');
const isNumber = require('../src/is-number');

describe('isNumber [/src/is-number.js]', function () {

  it('all should be number', function () {
    chai.assert.deepEqual(
      [
        isNumber(0),
        isNumber(1234567890),
        isNumber(-123),
        isNumber(1.23),
        isNumber(Infinity),
        isNumber(0xFF), // hexadecimal
        isNumber(123e5)
      ],
      [
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
