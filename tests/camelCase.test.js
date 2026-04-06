import camelCase from "../src/camelCase.js";

test.skip("basic camel case", () => {
  expect(camelCase("Foo Bar")).toBe("fooBar");
});

test.skip("handles dashes and underscores", () => {
  expect(camelCase("--foo-bar__")).toBe("fooBar");
});

test.skip("handles uppercase input", () => {
  expect(camelCase("__FOO_BAR__")).toBe("fooBar");
});

test.skip("single word", () => {
  expect(camelCase("hello")).toBe("hello");
});

test.skip("empty string", () => {
  expect(camelCase("")).toBe("");
});