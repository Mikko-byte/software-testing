import eq from "../src/eq.js";

test("same values are equal", () => {
  expect(eq(5, 5)).toBe(true);
});

test("different values are not equal", () => {
  expect(eq(5, 10)).toBe(false);
});

test("strings equal", () => {
  expect(eq("a", "a")).toBe(true);
});

test("objects are not equal", () => {
  expect(eq({ a: 1 }, { a: 1 })).toBe(false);
});

test("NaN equals NaN", () => {
  expect(eq(NaN, NaN)).toBe(true);
});