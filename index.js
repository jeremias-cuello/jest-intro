class StringInvalidError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * @throws {TypeError} if char is not a string
 * @throws {StringInvalidError} if char is not a string of length 1
 * @param {String} char
 * @returns {Boolean}
 */
const isVowel = char => {

  if (typeof char !== 'string') {
    throw new TypeError('Se necesita un argumento string');
  }
  if (char.length !== 1) {
    throw new StringInvalidError('Se necesita un string de length 1');
  }

  return 'aeiou'.includes(char);
};

const countVowels = (str) => [...str].reduce(
  (acc, char) => {
    if(isVowel(char)){
      acc[char]++;
    }

    return acc;
  },
  { a: 0, e: 0, i: 0, o: 0, u: 0 }
);

module.exports = { isVowel, countVowels, StringInvalidError };
