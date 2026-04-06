import slice from "../src/slice.js";

test("slice basic usage", () => {
  expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
});

test("slice without end", () => {
  expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
});

test("slice with negative start", () => {
  expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
});

test("slice with negative end", () => {
  expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3]);
});

test("slice empty array", () => {
  expect(slice([], 0, 2)).toEqual([]);
});

test("slice start greater than end", () => {
  expect(slice([1, 2, 3], 2, 1)).toEqual([]);
});

test("slice with start undefined", () => {
  expect(slice([1, 2, 3])).toEqual([1, 2, 3]);
});

test("slice with negative start larger than length", () => {
  expect(slice([1, 2, 3], -10)).toEqual([1, 2, 3]);
});

test("slice full array", () => {
  expect(slice([1, 2, 3, 4], 0, 4)).toEqual([1, 2, 3, 4]);
});

test("slice with start undefined and end undefined", () => {
  expect(slice([1, 2, 3])).toEqual([1, 2, 3]);
});