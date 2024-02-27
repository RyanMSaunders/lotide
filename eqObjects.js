
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

  if(object1Keys.length !== object2Keys.length) {
    return false
  }
  for(let i=0; i < object1Keys.length; i++){
    let valueArrObj1 = Array.isArray(object1Values[i])
    let valueArrObj2 = Array.isArray(object2Values[i])

    if(valueArrObj1 == true && valueArrObj2 == true){
      let eqArrTest = eqArrays(object1Values[i], object2Values[i])
      if(eqArrTest = true){
        return true;
      }
    } 

    if(object2Keys.includes(object1Keys[i])){
      let obj1ValCount = 0;
      let obj2ValCount = 0;
      for(let val1 in object1){
        if (val1 === object1Keys[i]){
          obj1ValCount ++
        }
      }
      for(let val2 in object2 ){
        if(val2 === object1Keys[i])
        obj2ValCount ++
      }
      console.log(obj1ValCount)
      console.log(obj2ValCount)

      if(obj1ValCount === obj2ValCount){
        return true
      }
    }
    
      return true; 
  } 
    
}




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => false

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false


//
// console.log("with arrays as values")
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);



const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

const multiColorShirtObject2 = { colors: ["red", "blue", "green"], size: "medium" };
const anotherMultiColorShirtObject2 = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2); // => true
assertEqual(eqObjects(multiColorShirtObject2  , anotherMultiColorShirtObject2), false);