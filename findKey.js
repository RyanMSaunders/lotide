
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

// Exporting 'findKey'
module.exports = findKey;

