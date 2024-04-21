
// A function 'without' which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  let newArr = [];
  
  for (let i in source) {
      
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};


// Exporting 'without'
module.exports = without;

