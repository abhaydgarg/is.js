const chai = require('chai');
const isMap = require('../src/is-map');

var m = new Map();
m.set(1, 'black');
m.set(2, 'red');
m.set('colors', 2);
m.set({ x: 1 }, 3);

describe('isMap [/src/is-map.js]', function () {

  it('all should be map', function () {
    chai.assert.deepEqual(
      [
        isMap(new Map()),
        isMap(m)
      ],
      [
        true,
        true
      ]
    );
  });

});
