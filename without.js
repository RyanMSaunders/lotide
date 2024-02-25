
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

// Implement without which will return a subset of a given array,
//  removing unwanted elements.
// Write a test case to make sure that the original array is not modified.

const without = function(source, itemsToRemove) {
  let newArr = []
  
  for(let i in source){
      
        
    if(!itemsToRemove.includes(source[i])){
            newArr.push(source[i])
          } 
        }
      return newArr
    }


 
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// want to try: checking for typeOf in conditional statement. creating an else statement, if arr1 is not equal to the unwanted variable, push to empty array

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
