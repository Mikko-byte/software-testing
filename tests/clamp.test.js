import clamp from "../src/clamp.js";

test.skip("value inside range", () => {
  expect(clamp(5, 1, 10)).toBe(5);
});

test("value below lower", () => {
  expect(clamp(0, 1, 10)).toBe(1);
});

test.skip("value above upper", () => {
  expect(clamp(20, 1, 10)).toBe(10);
});

test("NaN input returns NaN", () => {
  expect(isNaN(clamp("abc", 1, 10))).toBe(true);
});