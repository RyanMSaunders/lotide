const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback){
  let values = Object.values(object);
  let keys = Object.keys(object);
  
  
  for(let i = 0; i < keys.length; i ++){
    if(callback(object[keys[i]]) === true) {
      return keys[i]
    }
  }
}



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 3 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined) 

module.exports = findKey;

