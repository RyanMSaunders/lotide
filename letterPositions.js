
// A function 'letterPositions' which will return all the indices (zero-based positions) 
// in the string where each character is found.

const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    if (sentence[i] != " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(Number(i));
      } else {
        results[sentence[i]] = [Number(i)];
      }
    }
  }
  return results;
};

// Exporting 'letterPositions'
module.exports = letterPositions;



