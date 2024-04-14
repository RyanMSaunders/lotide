
// Test for 'assertObjectsEqual'

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let result = true;
  
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);


  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key])) {
      let eqArrayResult = eqArrays(object1[key], object2[key]);
      if (eqArrayResult == false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return result;
  
};

// A test function 'assertObjectsEqual' which will take in two objects and console.log an 
// appropriate message to the console based on whether the objects are equal or not.

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect;
  if (eqObjects(actualObject, expectedObject) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
  
};


// Testing 'assertObjectsEqual'

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

// Exporting 'assertObjectEqual'

module.exports = assertObjectsEqual;
