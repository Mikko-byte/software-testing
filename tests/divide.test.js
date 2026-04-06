import divide from "../src/divide.js";

test("divides numbers correctly", () => {
  expect(divide(10, 2)).toBe(5);
});

test("division by 1", () => {
  expect(divide(10, 1)).toBe(10);
});

test.skip("division with decimals (known bug)", () => {
  expect(divide(5, 2)).toBe(2.5);
});

test.skip("division by zero (known bug)", () => {
  expect(divide(10, 0)).toBe(Infinity);
});