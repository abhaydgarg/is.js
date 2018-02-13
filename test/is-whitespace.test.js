const chai = require('chai');
const isWhitespace = require('../src/is-whitespace');

describe('isWhitespace [/src/is-whitespace.js]', function () {

  it('all should be whitespace', function () {
    chai.assert.deepEqual(
      [
        isWhitespace(' '),
        isWhitespace('       ')
      ],
      [
        true,
        true
      ]
    );
  });

});
