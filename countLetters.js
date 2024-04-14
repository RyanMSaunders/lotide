// Test for 'countLetters'
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// A function 'countLetters' that takes in a sentence (as a string) and then 
// returns a count of each of the letters in that sentence.

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


// Testing 'countLetters'

const result1 = countLetters("Ryann");

assertEqual(result1["R"], 1);
assertEqual(result1["y"], 1);
assertEqual(result1["a"], 1);
assertEqual(result1["n"], 2);

// Exporting 'countLetters'

module.exports = countLetters;

