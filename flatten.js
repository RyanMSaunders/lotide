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

const flatten = function(arr){
  let newArr = []
  for (let val of arr){
    checkArr = Array.isArray(val)
    // console.log(checkArr)
    if (checkArr == true){
      for (let nestedVal of val){
        newArr.push(nestedVal)
      }
    } else {
    newArr.push(val)
    } 
  }
  console.log(newArr)
}



flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
