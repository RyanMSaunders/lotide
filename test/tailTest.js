const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  it("returns 2 for result.length", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("returns 3 for words.length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(words.length, 3);
  });

  it("returns 3 for words.length", () => {
    const word = tail(["Yo Yo"]);
    assert.strictEqual(word.length, 0);
  });

  it("returns 3 for words.length", () => {
    const noWord = tail([]);
    assert.strictEqual(noWord.length, 0);
  });
  

});


