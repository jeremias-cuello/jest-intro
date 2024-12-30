const isVowel = require(".");

describe("isVowel", () => {
  it("Deberia retornar true para input 'a'", () => {
    expect(isVowel("a")).toBe(true);
  });

  it("Deberia retornar true para input 'A'", () => {
    expect(isVowel("A")).toBe(true);
  });

  it("Deberia retornar false para input 'c'", () => {
    expect(isVowel("c")).toBe(false);
  });
});
