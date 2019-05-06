const chai = require('chai');
const isSet = require('../src/is-set');

describe('isSet [/src/is-set.js]', function () {

  it('all should be set', function () {
    chai.assert.deepEqual(
      [
        isSet(new Set()),
        isSet(new Set([1, 2, 3, 4, 5]))
      ],
      [
        true,
        true
      ]
    );
  });

});
