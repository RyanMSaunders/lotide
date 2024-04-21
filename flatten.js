
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

// Exporting 'flaten'
module.exports = flatten;


