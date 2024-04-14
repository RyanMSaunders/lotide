
// Function 'assertEqual'
const assertEqual = require("../assertEqual");

// Testing 'assertEqual'
assertEqual("Lighthouse Labs", "Bootcamp"); // => should FAIL
assertEqual("Bootcamp", "Bootcamp"); // => should PASS
assertEqual(1, 1); // => should PASS
assertEqual(1, 2); // => should FAIL
