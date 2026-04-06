import isArrayLike from "../src/isArrayLike.js";

test("array is array-like", () => {
  expect(isArrayLike([1, 2, 3])).toBe(true);
});

test("string is array-like", () => {
  expect(isArrayLike("abc")).toBe(true);
});

test("function is not array-like", () => {
  expect(isArrayLike(() => {})).toBe(false);
});

test("null is not array-like", () => {
  expect(isArrayLike(null)).toBe(false);
});

test("object without length is not array-like", () => {
  expect(isArrayLike({})).toBe(false);
});