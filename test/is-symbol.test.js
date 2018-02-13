const chai = require('chai');
const isSymbol = require('../src/is-symbol');

describe('isSymbol [/src/is-symbol.js]', function () {

  it('all should be symbol', function () {
    chai.assert.deepEqual(
      [
        isSymbol(Symbol()),
        isSymbol(Symbol('xyz'))
      ],
      [
        true,
        true
      ]
    );
  });

});
