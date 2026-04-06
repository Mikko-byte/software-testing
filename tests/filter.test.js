import filter from "../src/filter.js";

test("filters values correctly", () => {
  expect(filter([1, 2, 3, 4], x => x > 2)).toEqual([3, 4]);
});

test.skip("no matches", () => {
  expect(filter([1, 2], x => x > 5)).toEqual([]);
});

test.skip("all filtered out", () => {
  expect(filter([1, 2, 3], () => false)).toEqual([]);
});

test.skip("null array returns empty", () => {
  expect(filter(null, () => true)).toEqual([]);
});