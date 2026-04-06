import divide from "../src/divide.js";

test.skip("division with decimals", () => {
  expect(divide(5, 2)).toBe(2.5);
});

test.skip("division by zero", () => {
  expect(divide(10, 0)).toBe(Infinity);
});

test.skip("division with decimals", () => {
  expect(divide(5, 2)).toBe(2.5);
});

test.skip("division by zero", () => {
  expect(divide(10, 0)).toBe(Infinity);
});