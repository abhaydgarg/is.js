const chai = require('chai');
const isFloat = require('../src/is-float');

describe('isFloat [/src/is-float.js]', function () {

  it('all should be float', function () {
    chai.assert.deepEqual(
      [
        isFloat(0.1),
        isFloat(-0.1),
        isFloat(12345.67890),
        isFloat(-1.23),
        isFloat(1.03),
        isFloat(-1.0001)
      ],
      [
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
