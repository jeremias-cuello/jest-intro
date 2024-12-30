const isVowel = require(".");

test("isVowel retorna true para a letra 'a'", () => {
  expect(isVowel("a")).toBe(true);
});

test("isVowel retorna true para a letra 'c'", () => {
  expect(isVowel("c")).toBe(false);
});
