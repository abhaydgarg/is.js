const chai = require('chai');
const isEmail = require('../src/is-email');

describe('isEmail [/src/is-email.js]', function () {

  it('all should be email', function () {
    chai.assert.deepEqual(
      [
        isEmail('test@test.com'),
        isEmail('test.123@test.com')
      ],
      [
        true,
        true
      ]
    );
  });

});
