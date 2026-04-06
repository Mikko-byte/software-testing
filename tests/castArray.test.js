import castArray from "../src/castArray.js";

test("wraps non-array value", () => {
  expect(castArray(1)).toEqual([1]);
});

test("returns same array if already array", () => {
  const arr = [1, 2, 3];
  expect(castArray(arr)).toBe(arr);
});

test("wraps string", () => {
  expect(castArray("abc")).toEqual(["abc"]);
});

test("wraps null", () => {
  expect(castArray(null)).toEqual([null]);
});

test("wraps undefined", () => {
  expect(castArray(undefined)).toEqual([undefined]);
});

test("no arguments returns [undefined]", () => {
  expect(castArray()).toEqual([undefined]);
});