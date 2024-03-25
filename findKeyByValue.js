const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(givenObj, desiredVal) {
  let result = "";
  let values = Object.values(givenObj);
  let keys = Object.keys(givenObj);

  for(let i = 0; i < values.length; i++) {
    if (values[i] === desiredVal) {
      result += keys[i];
      return result;
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wir"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");

module.exports = findKeyByValue;

