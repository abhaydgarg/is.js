const chai = require('chai');
const isError = require('../src/is-error');

describe('isError [/src/is-error.js]', function () {

  it('all should be error', function () {
    chai.assert.deepEqual(
      [
        isError(new Error()),
        isError(new Error('message')),
        isError(new TypeError('message')),
        isError(new EvalError('message')),
        isError(new RangeError('message')),
        isError(new ReferenceError('message')),
        isError(new SyntaxError('message')),
        isError(new URIError('message'))
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
