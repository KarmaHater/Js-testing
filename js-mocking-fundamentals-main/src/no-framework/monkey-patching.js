const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

// this is how jest.fn is implemented under the hood
function fn(imp1) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return imp1(...args);
  };
  mockFn.mock = {
    calls: [],
  };
  return mockFn;
}

// This is called monkey patching
const originalGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);

const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");
console.log(utils.getWinner.mock.calls);

// Don't forget that an important part of mocking is cleaning up after yourself!!
utils.getWinner = originalGetWinner;
