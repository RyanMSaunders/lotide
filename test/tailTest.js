const assert = require('chai').assert;
const tail   = require('../tail');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"] );
  });

  it("returns ['Yo Yo', 'Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs]", () => {
    assert.deepEqual(["Yo Yo", "Lighthouse", "Labs"], ["Yo Yo", "Lighthouse", "Labs"] );
  });

  it("returns [] for ['Yo Yo']", () => {
    assert.deepEqual(tail(['Yo Yo']), [] )
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [] )
  });

});


