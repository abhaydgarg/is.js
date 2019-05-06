const chai = require('chai');
const isRegEx = require('../src/is-regex');

describe('isRegEx [/src/is-regex.js]', function () {

  it('all should be regex', function () {
    chai.assert.deepEqual(
      [
        isRegEx(/ab+c/),
        isRegEx(new RegExp('ab+c'))
      ],
      [
        true,
        true
      ]
    );
  });

});
