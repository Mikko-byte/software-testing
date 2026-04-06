import add from "../src/add.js";

test("adds two positive numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(add(-2, -3)).toBe(-5);
});

test("adds mixed numbers", () => {
  expect(add(-2, 3)).toBe(1);
});

test("adds string numbers as strings", () => {
  expect(add("2", "3")).toBe("23");
});

test("adds number and undefined", () => {
  expect(add(5, undefined)).toBe(5);
});