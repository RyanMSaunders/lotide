
const assertEqual= require("../assertEqual");
const head = require("../head");

// TESTS
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 5);
assertEqual(head([]), 5);