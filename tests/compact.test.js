import compact from "../src/compact.js";

test.skip("removes falsy values", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

test("empty array", () => {
  expect(compact([])).toEqual([]);
});

test("all falsy values", () => {
  expect(compact([0, false, "", null, undefined])).toEqual([]);
});

test.skip("keeps all truthy values", () => {
  expect(compact([1, "a", true])).toEqual([1, "a", true]);
});