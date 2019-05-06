const chai = require('chai');
const isDate = require('../src/is-date');

describe('isDate [/src/is-date.js]', function () {

  it('all should be date', function () {
    chai.assert.deepEqual(
      [
        isDate(new Date()),
        isDate(new Date('December 17, 1995 03:24:00')),
        isDate(new Date('1995-12-17T03:24:00')),
        isDate(new Date(1995, 11, 17)),
        isDate(new Date(1995, 11, 17, 3, 24, 0))
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
