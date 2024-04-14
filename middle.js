
// A function 'middle' which will take in an array and return the 
// middle-most element(s) of the given array.

const middle = function(arr) {
  const arrLength = arr.length;
  let middleOfArr = [];
  
  if (arrLength <= 2) {
    return middleOfArr;
  } else if (arrLength % 2 !== 0) {
    let num = (arrLength + 1) / 2;
    middleOfArr.push(arr[num - 1]);
    return middleOfArr;
  } else if (arrLength % 2 === 0) {
    let firstNum = arrLength / 2;
    let secondNum = firstNum + 1;
    middleOfArr.push(arr[firstNum - 1], arr[secondNum - 1]);
    return middleOfArr;
  }

};

// Exporting 'middle'
module.exports = middle;

