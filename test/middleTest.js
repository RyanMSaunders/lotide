
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
//TESTS

assertArraysEqual(middle([1]), ([])); // => []
assertArraysEqual(middle([1, 2]), ([])); // => []
assertArraysEqual(middle([1, 2, 3]), ([2])); // should pass
assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3])); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])); // should pass