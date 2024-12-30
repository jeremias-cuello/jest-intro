const { isVowel, countVowels, StringInvalidError } = require(".");

describe("isVowel", () => {

  it("Deberia arrojar un error si no es String", () => {
    expect(() => isVowel()).toThrow(TypeError);
    expect(() => isVowel(123)).toThrow(TypeError);
    expect(() => isVowel(["length 1"])).toThrow(TypeError);
  });

  it("Deberia arrojar error si string no tiene length 1", () => {
    expect(() => isVowel("")).toThrow(StringInvalidError);
    expect(() => isVowel("12")).toThrow(StringInvalidError);
  });

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
