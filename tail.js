// A function tail which returns the "tail" of an array:
// everything except for the first item (head) of the provided array

const tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

// Exporting 'tail'
module.exports = tail;
