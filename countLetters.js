
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

// Exporting 'countLetters'

module.exports = countLetters;

