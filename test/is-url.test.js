const chai = require('chai');
const isUrl = require('../src/is-url');

describe('isUrl [/src/is-url.js]', function () {

  it('all should be url', function () {
    chai.assert.deepEqual(
      [
        isUrl('http://www.example.com'),
        isUrl('http://www.example.com:1000'),
        isUrl('https://www.example.com'),
        isUrl('ftp://www.example.com')
      ],
      [
        true,
        true,
        true,
        true
      ]
    );
  });

});
