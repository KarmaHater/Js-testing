// So far we’re still basically monkey-patching the utils module which is fine, but could lead to problems in the future, especially if we want to mock a ESModule export which doesn’t allow this kind of monkey-patching on exports.  Instead, let’s mock the entire module so when our test subject requires the file they get our mocked version instead.

const thumbWar = require("../thumb-war");
const utilsMock = require("../utils");

// The first argument to jest.mock is the path to the module that you're mocking, and that's relative to our jest.mock is being called.
// The second argument is a module factory function that will return the mocked version of the module with our mock implementation.

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});

test("returns winner", () => {
  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
  expect(winner).toBe("Kent C. Dodds");
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"],
  ]);

  // cleanup
  utilsMock.getWinner.mockReset();
});
