
// Importing Chai Library
const assert = require('chai').assert;

// Importing 'middle' function
const middle   = require('../middle');

// Testing 'middle' function

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const arr = [1];
    assert.strictEqual(arr.length, 1);
    assert.deepEqual(middle(arr), []);
    assert.strictEqual(arr.length, 1);
  });

  it("returns [] for [1, 2]", () => {
    const arr = [1, 2];
    assert.strictEqual(arr.length, 2);
    assert.deepEqual(middle(arr), []);
    assert.strictEqual(arr.length, 2);
  });

  it("returns [2] for [1, 2, 3]", () => {
    const arr = [1, 2, 3];
    assert.strictEqual(arr.length, 3);
    assert.deepEqual(middle(arr), [2]);
    assert.strictEqual(arr.length, 3);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const arr = [1, 2, 3, 4];
    assert.strictEqual(arr.length, 4);
    assert.deepEqual(middle(arr), [2, 3]);
    assert.strictEqual(arr.length, 4);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    assert.strictEqual(arr.length, 6);
    assert.deepEqual(middle(arr), [3, 4]);
    assert.strictEqual(arr.length, 6);
  });

});

