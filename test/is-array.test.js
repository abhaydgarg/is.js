const chai = require('chai');
const isArray = require('../src/is-array');

describe('isArray [/src/is-array.js]', function () {

  it('all should be array', function () {
    chai.assert.deepEqual(
      [
        isArray([]),
        isArray([1]),
        isArray([1, 2]),
        isArray(['foo', 'bar']),
        isArray(['foo', 1, 'bar', 2])
      ],
      [
        true,
        true,
        true,
        true,
        true
      ]
    );
  });

});
