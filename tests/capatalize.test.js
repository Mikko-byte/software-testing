import capitalize from "../src/capitalize.js";

test("capitalizes lowercase string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("converts uppercase string", () => {
  expect(capitalize("HELLO")).toBe("Hello");
});

test("mixed case string", () => {
  expect(capitalize("hELLo")).toBe("Hello");
});

test("empty string", () => {
  expect(capitalize("")).toBe("");
});

test("number input", () => {
  expect(capitalize(123)).toBe("123");
});

test("null input", () => {
  expect(capitalize(null)).toBe("Null");
});