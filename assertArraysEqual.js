
// 'eqArrays' function used in 'assertArraysEqual'

const eqArrays = require("./eqArrays");

// A function 'assertArraysEqual' which will take in two arrays and console.log 
// an appropriate message to the console depending on if they are equal or not.

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Exporting assertArraysEqual
module.exports = assertArraysEqual;
