
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const eqObjects = function(object1, object2){
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2)
  let object1Values = Object.values(object1);
  let object2Values = Object.values(object2);


  for(let i=0; i < object1Keys.length; i++){
    let valueArrObj1 = Array.isArray(object1Values[i])
    let valueArrObj2 = Array.isArray(object2Values[i])

    // if(eqArrays(valueArrObj1, valueArrObj2)){
    //   return true
    // } else

    if(object1Keys.length !== object2Keys.length){
      return false
    } else if(object1Keys[i] === object2Keys[i]){
      return true;
    } else {
      return false;
    }
    
  }

}


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => false

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), false); // => false

//
console.log("with arrays as values")
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);



const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
