// Test for 'findKey'

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// A function 'findKey' which takes in an object and a callback, scans
// the object and returns the first key for which the callback 
// returns a truthy value. If no key is found, it returns undefined.

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  
  
  for (let i = 0; i < keys.length; i ++) {
    if (callback(object[keys[i]]) === true) {
      return keys[i];
    }
  }
};


// Testing 'findKey'

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => should PASS

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined); // => should PASS

// Exporting 'findKey'
module.exports = findKey;

