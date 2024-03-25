const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputStr) {
  const results = {};
  for (let letter of inputStr) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters("Ryann");

assertEqual(result1["R"], 1);
assertEqual(result1["y"], 1);
assertEqual(result1["a"], 1);
assertEqual(result1["n"], 2);


module.exports = countLetters;

