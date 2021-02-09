const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  // Another way to mock functions is with Spies
  // 1. First spyOn on the function
  // 2. Write a mockImplementation or what the mock function will
  // 3. Lastly mockRestore the original implementation of the the original functions
  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  // cleanup
  utils.getWinner.mockRestore();
});
