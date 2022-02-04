/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const samples = [
  ['h', 'e', 'l', 'l', 'o'],
  ['H', 'a', 'n', 'n', 'a', 'h'],
];
var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

samples.forEach((sample) => {
  reverseString(sample);
});
