const chai = require('chai');
const isNullOrUndefined = require('../src/is-null-or-undefined');

describe('isNullOrUndefined [/src/is-null-or-undefined.js]', function () {

  it('all should be a null or undefined', function () {
    chai.assert.deepEqual(
      [
        isNullOrUndefined(null),
        isNullOrUndefined(undefined)
      ],
      [
        true,
        true
      ]
    );
  });

});
