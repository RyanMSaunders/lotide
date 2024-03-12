
const middle = function(arr) {
  const arrLength = arr.length;
  let middleOfArr = [];
  
  if (arrLength <= 2) {
    // console.log(middleOfArr);
    return middleOfArr;
  } else if (arrLength % 2 !== 0) {
    let num = (arrLength + 1) / 2;
    middleOfArr.push(arr[num - 1]);
    // console.log(middleOfArr);
    return middleOfArr;
  } else if (arrLength % 2 === 0) {
    let firstNum = arrLength / 2;
    let secondNum = firstNum + 1;
    middleOfArr.push(arr[firstNum - 1], arr[secondNum - 1]);
    // console.log(middleOfArr);
    return middleOfArr;
  }

};


module.exports = middle;

