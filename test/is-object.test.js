const chai = require('chai');
const isObject = require('../src/is-object');

// using constructor
let myCarFromObjectConstructor = new Object();
myCarFromObjectConstructor.make = 'Ford';
myCarFromObjectConstructor.model = 'Mustang';
myCarFromObjectConstructor.year = 1969;

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let myCarFromFunctionConstructor = new Car('Eagle', 'Talon TSi', 1993);

describe('isObject [/src/is-object.js]', function () {

  it('all should be object', function () {
    chai.assert.deepEqual(
      [
        isObject({}),
        isObject(myCarFromObjectConstructor),
        isObject(myCarFromFunctionConstructor),
        isObject(Object.create(null))
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
