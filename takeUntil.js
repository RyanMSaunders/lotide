

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

// Exporting 'takeUntil'

module.exports = takeUntil;

