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

const middle = function(arr) {
  const arrLength = arr.length;
  let middleOfArr = [];
  
  if (arrLength <= 2) {
    // console.log(middleOfArr);
    return middleOfArr;
  } else if (arrLength % 2 !== 0) {
    let num = (arrLength + 1) / 2;
    middleOfArr.push(arr[num - 1]);
    // console.log(middleOfArr);
    return middleOfArr;
  } else if (arrLength % 2 === 0) {
    let firstNum = arrLength / 2;
    let secondNum = firstNum + 1;
    middleOfArr.push(arr[firstNum - 1], arr[secondNum - 1]);
    // console.log(middleOfArr);
    return middleOfArr;
  }

};


middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]


assertArraysEqual(middle([1]), ([])); // => []
assertArraysEqual(middle([1, 2]), ([])); // => []
assertArraysEqual(middle([1, 2, 3]), ([2])); // should pass
assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3])); // should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])); // should pass

