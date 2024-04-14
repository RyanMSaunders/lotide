// Tests for 'flatten'

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// A function flatten which will take in an array containing elements including
// nested arrays of elements, and return a "flattened" version of the array. Limited
// to only one level of nesting.

const flatten = function(arr) {
  let newArr = [];
  for (let val of arr) {
    let checkArr = Array.isArray(val);
    if (checkArr == true) {
      for (let nestedVal of val) {
        newArr.push(nestedVal);
      }
    } else {
      newArr.push(val);
    }
  }
  return newArr;
};


// Testing 'flatten'

flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

// Exporting 'flaten'
module.exports = flatten;


