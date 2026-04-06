import defaultTo from "../src/defaultTo.js";

test("returns value if defined", () => {
  expect(defaultTo(5, 10)).toBe(5);
});

test("null returns default", () => {
  expect(defaultTo(null, 10)).toBe(10);
});

test("undefined returns default", () => {
  expect(defaultTo(undefined, 10)).toBe(10);
});

test("0 is valid value", () => {
  expect(defaultTo(0, 10)).toBe(0);
});