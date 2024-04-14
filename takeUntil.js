

// A function 'takeUntil' which will keep collecting items from a provided array 
// until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let resultTakeUntil = [];

  array.map((item, index) => {
    if (callback(item) == true) {
      resultTakeUntil = array.slice(0, index);
    }
  });

  return resultTakeUntil;
};

// Testing 'takeUntil'

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Exporting 'takeUntil'

module.exports = takeUntil;

