
// Test for 'eqArrays'
const assertEqual = require("../assertEqual");

// Function 'eqArrays'
const eqArrays = require("../eqArrays");

// Testing 'eqArrays'
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL
