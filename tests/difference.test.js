import difference from "../src/difference.js";

test("basic difference", () => {
  expect(difference([1, 2, 3], [2])).toEqual([1, 3]);
});

test("difference with multiple values removed", () => {
  expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
});

test("difference with no values to remove", () => {
  expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
});

test("difference with empty array", () => {
  expect(difference([], [1, 2])).toEqual([]);
});

test("difference with non-array input returns empty", () => {
  expect(difference(null, [1, 2])).toEqual([]);
});

test("difference with duplicate values", () => {
  expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3]);
});

test("difference with strings", () => {
  expect(difference(["a", "b", "c"], ["b"])).toEqual(["a", "c"]);
});

test("difference with mixed types", () => {
  expect(difference([1, "2", 3], ["2"])).toEqual([1, 3]);
});

test("difference where all values removed", () => {
  expect(difference([1, 2], [1, 2])).toEqual([]);
});