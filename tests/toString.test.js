import toString from "../src/toString.js";

test("number to string", () => {
  expect(toString(123)).toBe("123");
});

test("string stays same", () => {
  expect(toString("hello")).toBe("hello");
});

test("null to string", () => {
  expect(toString(null)).toBe("null");
});

test("undefined to string", () => {
  expect(toString(undefined)).toBe("undefined");
});

test("array to string", () => {
  expect(toString([1, 2, 3])).toBe("1,2,3");
});

test("negative zero preserved", () => {
  expect(toString(-0)).toBe("-0");
});

test("symbol to string", () => {
  const sym = Symbol("test");
  expect(toString(sym)).toBe(sym.toString());
});