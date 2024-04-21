
// A function 'map' which takes array to map and a callback function and returns 
// a new array based on the results of the callback function.

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Exporting 'map'
module.exports = map;


