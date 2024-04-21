
// Require eqObjects for assertObjectsEqual functionality

const eqObjects = require('./eqObjects')


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

// Exporting 'assertObjectEqual'

module.exports = assertObjectsEqual;
