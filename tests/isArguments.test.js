import isArguments from "../src/isArguments.js";

test("arguments object returns true", () => {
  function testFunc() {
    return isArguments(arguments);
  }
  expect(testFunc(1, 2)).toBe(true);
});

test("array returns false", () => {
  expect(isArguments([1, 2, 3])).toBe(false);
});

test("plain object returns false", () => {
  expect(isArguments({ a: 1 })).toBe(false);
});

test("null returns false", () => {
  expect(isArguments(null)).toBe(false);
});

test("string returns false", () => {
  expect(isArguments("test")).toBe(false);
});