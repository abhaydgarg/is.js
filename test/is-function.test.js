const chai = require('chai');
const isFunction = require('../src/is-function');

// function declaration
function fnDeclaration() { }
// function expression
let fnExpression = function () { };
// function constructor
var fnConstructor = new Function();
// arrow function
let fnArrow = () => { };

describe('isFunction [/src/is-function.js]', function () {

  it('all should be function', function () {
    chai.assert.deepEqual(
      [
        isFunction(fnDeclaration),
        isFunction(fnExpression),
        isFunction(fnConstructor),
        isFunction(fnArrow)
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
