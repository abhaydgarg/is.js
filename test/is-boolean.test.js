const chai = require('chai');
const isBoolean = require('../src/is-boolean');

describe('isBoolean [/src/is-boolean.js]', function () {

  it('all should be boolean', function () {
    chai.assert.deepEqual(
      [
        isBoolean(true),
        isBoolean(false)
      ],
      [
        true,
        true
      ]
    );
  });

});
