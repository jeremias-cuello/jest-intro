const { isVowel, countVowels } = require(".");

describe("isVowel", () => {
  it("Deberia retornar true para input 'a'", () => {
    expect(isVowel("a")).toBeTruthy();
  });

  it("Deberia retornar false para input 'c'", () => {
    expect(isVowel("c")).toBe(false);
  });
});

describe("countVowels", () => {
  it('Deberia retornar { a: 2, e: 3, i: 4, o: 2, u: 8 }', () => {
    const str = "aaeeeiiiioouuuuuuuu";
    expect(countVowels(str)).toEqual({ a: 2, e: 3, i: 4, o: 2, u: 8 });
  });
});
