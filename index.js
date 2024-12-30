const isVowel = char => 'aeiou'.includes(char);
const countVowels = (str) => [...str].reduce(
  (acc, char) => {
    if(isVowel(char)){
      acc[char]++;
    }

    return acc;
  },
  { a: 0, e: 0, i: 0, o: 0, u: 0 }
);

module.exports = { isVowel, countVowels };
