
// A function "findKeyByValue" which takes in an object and a value, scans the object 
// and returns the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(givenObj, desiredVal) {
  let result = "";
  let values = Object.values(givenObj);
  let keys = Object.keys(givenObj);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === desiredVal) {
      result += keys[i];
      return result;
    }
  }
};

// Exporting 'findKeyByValue'
module.exports = findKeyByValue;

