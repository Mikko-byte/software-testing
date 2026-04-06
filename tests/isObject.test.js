import isObject from "../src/isObject.js";

test("object", () => {
  expect(isObject({})).toBe(true);
});

test("array", () => {
  expect(isObject([])).toBe(true);
});

test("function is object", () => {
  expect(isObject(() => {})).toBe(true);
});

test("null is not object", () => {
  expect(isObject(null)).toBe(false);
});

test("number is not object", () => {
  expect(isObject(5)).toBe(false);
});