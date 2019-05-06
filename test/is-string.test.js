const chai = require('chai');
const isString = require('../src/is-string');

let str = 'Hello';

describe('isString [/src/is-string.js]', function () {

  it('all should be string', function () {
    chai.assert.deepEqual(
      [
        isString(''),
        isString(' '),
        isString('123'),
        isString('abc'),
        isString('true'),
        isString(`${str} World`)
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
