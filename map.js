
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


const map = function(array, callback){
  // console.log('array', array)
  // console.log('callback', callback)
  const results = []
  

  for (let item of array) {
    // console.log('item BEFORE', item)
    // console.log('item AFTER', callback(item))
    // console.log('---');
    results.push(callback(item));
  }
  return results
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results1, [ 'g', 'c' ])
assertArraysEqual(results1, [ 'c', 't', 'm', 't' ])

module.exports = map;


