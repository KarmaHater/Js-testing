const thumbWar = require("../thumb-war");

// What you do is create a directory with __mocks__ and then a file that has the name of the module that you want to mock. In our case, that's utils.js. Then in that utils.js, we place the mock that we want to use.

// Then we can go back to our test file, and we can remove the second argument from our jest.mock. Jest will automatically pick up the mock file that we have created. Our test still works!

const utilsMock = require("../utils");

jest.mock("../utils"),
  () => {
    return {
      getWinner: jest.fn((p1, p2) => p1),
    };
  };

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
