import toNumber from "../src/toNumber.js";

test("binary string", () => {
  expect(toNumber("0b101")).toBe(5);
});

test("octal string", () => {
  expect(toNumber("0o10")).toBe(8);
});

test("invalid string returns NaN", () => {
  expect(isNaN(toNumber("abc"))).toBe(true);
});

test("bad hex returns NaN", () => {
  expect(isNaN(toNumber("-0x1"))).toBe(true);
});

test("object with valueOf", () => {
  const obj = { valueOf: () => 42 };
  expect(toNumber(obj)).toBe(42);
});

test("object without valueOf returns NaN", () => {
  expect(isNaN(toNumber({}))).toBe(true);
});

test("empty string returns 0", () => {
  expect(toNumber("")).toBe(0);
});

test("whitespace string returns 0", () => {
  expect(toNumber("   ")).toBe(0);
});

test("string with spaces and number", () => {
  expect(toNumber("   5   ")).toBe(5);
});

test("Infinity string", () => {
  expect(toNumber("Infinity")).toBe(Infinity);
});

test("negative number string", () => {
  expect(toNumber("-10")).toBe(-10);
});

test("null returns 0", () => {
  expect(toNumber(null)).toBe(0);
});

test("boolean true", () => {
  expect(toNumber(true)).toBe(1);
});

test("boolean false", () => {
  expect(toNumber(false)).toBe(0);
});

test("number stays number", () => {
  expect(toNumber(42)).toBe(42);
});

test("symbol returns NaN", () => {
  expect(isNaN(toNumber(Symbol("x")))).toBe(true);
});