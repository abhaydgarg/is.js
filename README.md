# is.js

Javascript checking library.

[![NPM](https://nodei.co/npm/@abhaydgarg/is.png?downloads=true)](https://nodei.co/npm/@abhaydgarg/is/)

## Installation

```sh
npm install --save @abhaydgarg/is
```

## Run test

```sh
# all
npm run test

# single file
FILE=is-string.test.js npm run test:file
```

## Usage

```javascript
// commonJS - Destructuring
const { isEmpty, isString } = require('@abhaydgarg/is');

// ES6 - using webapack bundler
import { isEmpty, isString } from '@abhaydgarg/is';
```

## API

### 1. Type check

#### isArray(value)

Check if `value` is of type `Array`.

#### isBoolean(value)

Check if `value` is of type `boolean`.

#### isDate(value)

Check if `value` is of type `Date`.

#### isError(value)

Check if `value` is of type `Error`.

#### isFunction(value)

Check if `value` is of type `function`.

#### isMap(value)

Check if `value` is of type `Map`.

#### isNumber(value)

Check if `value` is of type `number`.

#### isObject(value)

Check if `value` is of type `object`.

#### isRegEx(value)

Check if `value` is of type `RegExp`.

#### isSet(value)

Check if `value` is of type `Set`.

#### isString(value)

Check if `value` is of type `string`.

#### isSymbol(value)

Check if `value` is of type `symbol`.

#### isUndefined(value)

Check if `value` is `undefined`.

#### isNull(value)

Check if `value` is `null`.

#### isNullOrUndefined(value)

Check if `value` is either `null` or `undefined`.

### 2. Emptiness check

#### isEmpty(value)

Check if `value` is empty.

**All below return `true`**

```javascript
isEmpty(null);
isEmpty(undefined);
isEmpty(function () { }); // empty function
isEmpty([]); // array length 0
isEmpty(new Error()); // without message
isEmpty(new Set()); // Set size 0
isEmpty(new Map()); // Map size 0
isEmpty({});
isEmpty(0);
isEmpty(''); // string length 0
isEmpty(' ') // whitespace string is consider empty
```

### 3. Value check

#### isNumeric(value)

Check if `value` is numeric.

```javascript
isNumeric(1234567890); // true
isNumeric('1234567890'); // true
isNumeric('-123'); // true
isNumeric('1.23'); // true
isNumeric('Infinity'); // true
isNumeric('0xFF') // true
isNumeric('123e5');  // true
```

#### isInteger(value)

Check if `value` of type `number` is integer (whole number).

#### isFloat(value)

Check if `value` of type `number` is float (fractional number).

#### isUrl(value)

Check if `value` is url.

#### isEmail(value)

Check if `value` is email.

#### isWhitespace(value)

Check if `value` of type `string` is whitespace.

## License

MIT
