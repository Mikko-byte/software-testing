import isEmpty from "../src/isEmpty.js";

test("null is empty", () => {
  expect(isEmpty(null)).toBe(true);
});

test("boolean is empty", () => {
  expect(isEmpty(true)).toBe(true);
});

test("number is empty", () => {
  expect(isEmpty(1)).toBe(true);
});

test("empty array", () => {
  expect(isEmpty([])).toBe(true);
});

test("non-empty array", () => {
  expect(isEmpty([1])).toBe(false);
});

test("empty string", () => {
  expect(isEmpty("")).toBe(true);
});

test("non-empty string", () => {
  expect(isEmpty("abc")).toBe(false);
});

test("empty object", () => {
  expect(isEmpty({})).toBe(true);
});

test("non-empty object", () => {
  expect(isEmpty({ a: 1 })).toBe(false);
});