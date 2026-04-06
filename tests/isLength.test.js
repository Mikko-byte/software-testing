import isLength from "../src/isLength.js";

test("valid length", () => {
  expect(isLength(3)).toBe(true);
});

test("zero is valid", () => {
  expect(isLength(0)).toBe(true);
});

test("negative number", () => {
  expect(isLength(-1)).toBe(false);
});

test("float number", () => {
  expect(isLength(1.5)).toBe(false);
});

test("string is not valid", () => {
  expect(isLength("3")).toBe(false);
});

test("Infinity is not valid", () => {
  expect(isLength(Infinity)).toBe(false);
});

test("exceeds MAX_SAFE_INTEGER", () => {
  expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
});