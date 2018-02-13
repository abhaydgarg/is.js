const chai = require('chai');
const isNumeric = require('../src/is-numeric');

describe('isNumeric [/src/is-numeric.js]', function () {

  it('all should be numeric', function () {
    chai.assert.deepEqual(
      [
        isNumeric(0),
        isNumeric(1234567890),
        isNumeric('1234567890'),
        isNumeric('-123'),
        isNumeric('1.23'),
        isNumeric('Infinity'),
        isNumeric('0xFF'), // hexadecimal
        isNumeric('123e5')
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
