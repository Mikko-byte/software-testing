import map from '../src/map.js';

test('maps values using iteratee', () => {
  const result = map([1, 2, 3], x => x * 2);
  expect(result).toEqual([2, 4, 6]);
});

test('passes index to iteratee', () => {
  const result = map([10, 20], (value, index) => value + index);
  expect(result).toEqual([10, 21]);
});

test('handles empty array', () => {
  const result = map([], x => x * 2);
  expect(result).toEqual([]);
});

test('handles null array', () => {
  const result = map(null, x => x);
  expect(result).toEqual([]);
});

test("maps array", () => {
  expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
});

test("empty array", () => {
  expect(map([], x => x * 2)).toEqual([]);
});

test("null array returns empty", () => {
  expect(map(null, x => x)).toEqual([]);
});