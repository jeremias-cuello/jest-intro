const isVowel = require(".");
console.log("isVowel retorna true para a letra 'a'");
if(isVowel("a") == true){
  console.log("OK");
} else {
  console.error("FAIL");
}

console.log("isVowel retorna true para a letra 'c'");
if(isVowel("c") == false){
  console.log("OK");
} else {
  console.error("FAIL");
}
