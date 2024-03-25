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


const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence){
    if (sentence[i] != " "){
      if (results[sentence[i]]){
        results[sentence[i]].push(Number(i))
      } else{
        results[sentence[i]] = [Number(i)]
      }
    }
  }
  return results;
};


const result1 = letterPositions("Ryann Saunnders");


assertArraysEqual( result1["R"], [0]) 
assertArraysEqual( result1["y"], [1]) 
assertArraysEqual( result1["a"], [2, 7]) 
assertArraysEqual( result1["n"], [3, 4, 9, 10]) 

assertArraysEqual(letterPositions("hello world").e, [1]);
assertArraysEqual(letterPositions("hello word").o, [4, 7]);


module.exports = letterPositions;



