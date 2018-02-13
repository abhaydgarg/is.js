const chai = require('chai');
const isEmpty = require('../src/is-empty');

describe('isEmpty [/src/is-empty.js]', function () {

  it('all should be empty', function () {
    chai.assert.deepEqual(
      [
        isEmpty(null),
        isEmpty(undefined),
        isEmpty(function () { }),
        isEmpty([]),
        isEmpty(new Error()),
        isEmpty(new Set()),
        isEmpty(new Map()),
        isEmpty({}),
        isEmpty(0, 'zero'), // consider number 0 empty
        isEmpty(''),
        isEmpty(' ', 'whitespace') // consider whitespace empty
      ],
      [
        true,
        true,
        true,
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

  it('all should not be empty', function () {
    chai.assert.deepEqual(
      [
        isEmpty(0),
        isEmpty(' ')
      ],
      [
        false,
        false
      ]
    );
  });

});
