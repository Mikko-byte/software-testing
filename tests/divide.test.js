import divide from "../src/divide.js";

test("divides numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

test("division by 1", () => {
  expect(divide(10, 1)).toBe(10);
});

test("division with decimals", () => {
  expect(divide(5, 2)).toBe(2.5);
});

test("division by zero", () => {
  expect(divide(10, 0)).toBe(Infinity);
});