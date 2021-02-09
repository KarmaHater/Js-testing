const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  // jest fn will keep track of what the function is called you can not test for what paramaters go in the function as well
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");

  expect(utils.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2);

  // called on the Nth (1st)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    "Kent C. Dodds",
    "Ken Wheeler"
  );

  // called on the Nth (2nd)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    "Kent C. Dodds",
    "Ken Wheeler"
  );

  // cleanup
  utils.getWinner = originalGetWinner;
});
