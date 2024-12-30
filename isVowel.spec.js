const isVowel = require(".");

describe('isVowel', () => {
  it("Letra 'a'", () => {
    expect(isVowel("a")).toBe(true);
  });

  it("Letra 'A'", () => {
    expect(isVowel("A")).toBe(true);
  });

  it("Letra 'c'", () => {
    expect(isVowel("c")).toBe(false);
  });
});
