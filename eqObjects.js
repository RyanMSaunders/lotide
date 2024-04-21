
// A function 'eqObjects' which takes in two objects and returns true or false,
//  based on a perfect match.

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

// Exporting 'eqObjects'

module.exports = eqObjects;




