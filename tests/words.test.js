import words from "../src/words.js";

test("splits by default (ascii)", () => {
  expect(words("hello world")).toEqual(["hello", "world"]);
});

test("single word", () => {
  expect(words("hello")).toEqual(["hello"]);
});

test("empty string", () => {
  expect(words("")).toEqual([]);
});

test("custom pattern", () => {
  expect(words("a,b,c", /[^,]+/g)).toEqual(["a", "b", "c"]);
});