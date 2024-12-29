const assert = require("assert");
const isVowel = require(".");

let failes = 0;

const tests = [];
const test = (name, fn) => { tests.push({ name, fn }) };

test("isVowel retorna true para a letra 'a'", () => {
  assert.equal(isVowel("a"), true);
});

test("isVowel retorna true para a letra 'c'", () => {
  assert.equal(isVowel("c"), false);
});

tests.forEach(({ name, fn }) => {
  try {
    fn();
    console.log(`${name} passed`);
  } catch (error) {
    console.error(`${name} failed`);
    console.error(`Expected ${error.expected} but received ${error.actual}`);
    failes++;
  }
});

if(failes >= 0){
  console.log("Cantidad de failes: ", failes);
}
