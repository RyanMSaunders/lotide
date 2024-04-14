
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ryansaunders/lotide`

**Install Dependencies and DevDependencies:**

`npm install mocha`
`npm install chai`

**Require it:**

`const _ = require('@ryansaunders/lotide/index');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assertArraysEqual function that checks if two arrays are equal and prints message to console.
* `assertEqual(...)`: assertEqual function mimiking console.assert, checks if two values are equal, printing message to console.
* `assertObjectsEqual(...)`: assertObjectsEqual function that takes two objects as inputs and prints the result of their equality to the console
* `countLetters(...)`: countLetters function that takes string as input and returns object counting the amount of each letter present in string
* `countOnly(...)`: countOnly function which takes an array and an object as input, creates a count of object items occuring in array, returns an object with item as key and count as value
* `eqArrays(...)`: eqArray function that checks if two arrays are equal
* `eqObjects(...)`: eqObjects function that takes two objects and returns a boolean checking for equality
* `findKey(...)`: findKey function that takes object and callback and returns key if callback is truthy, undefined if not
* `findKeyByValue(...)`: findKeyByValue function that takes an object and a value as input, and outputs the key associated with that value
* `flatten(...)`: flatten function that returns values of elements, included nested arrays
* `head(...)`: Head function that returns first element of array.
* `letterPositions(...)`: letterPositions function which takes a string and returns an object whose keys are the letters of that string and whose values are the indices of the occurences of those letters.
* `map(...)`: map function that takes in an array and a callback function and returns a modified array
* `middle(...)`: middle function that returns the middle of an array
* `tail(...)`: Tail function that returns everything but the head of an array
* `takeUntil(...)`: takeUntil function that takes an array and a callback function as arguments and returns a slice of the array with elements taken from the beginning
* `without(...)`: without function that excludes unwanted variables from an array of any size

* `assertArraysEqualTest(...)`: tests for assertArraysEqual function
* `assertEqualTest(...)`: tests for assertEqual function
* `eqArraysTest(...)`: tests for eqArrays function
* `headTest(...)`: tests for head function, utilizing mocha and chai
* `middleTest(...)`: tests for middle function,  utilizing mocha and chai
* `tailTest(...)`: tests for tail function, utilizing mocha and chai