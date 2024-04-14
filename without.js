// Tests for 'without' function

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


// A function 'without' which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  let newArr = [];
  
  for (let i in source) {
      
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

 
// Testing 'without' function

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
// Making sure the original array was not altered by the without function
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS


// Exporting 'without'
module.exports = without;

