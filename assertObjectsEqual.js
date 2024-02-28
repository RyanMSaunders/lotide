const eqObjects = function(object1, object2){
  let result = true;
  
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2)


  if(object1Keys.length !== object2Keys.length) {
    return false
  } 

  for(let key of object1Keys){
    if (Array.isArray(object1[key])){
      let eqArrayResult = eqArrays(object1[key], object2[key])
      if(eqArrayResult == false){
        return false
      }
    } else if(object1[key] !== object2[key]){
      return false
    }  
  }

  return result
  
}

// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

/*Instead of doing an eqArrays check though, this assertion function 
will make use of your eqObjects function for object comparison. */

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObject, expectedObject) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
  
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject) // => true
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject) // => false

