const assert = require("assert");
const isVowel = require(".");

let failes = 0;

console.log("isVowel retorna true para a letra 'a'");
try {
  assert.ok(isVowel("a"));
  console.log("OK");
} catch (err) {
  console.error("FAIL");
  failes++;
}

console.log("isVowel retorna true para a letra 'c'");
try {
  assert.equal(isVowel("c"), false);
  console.log("OK");
} catch (err) {
  console.error("FAIL");
  failes++;
}
