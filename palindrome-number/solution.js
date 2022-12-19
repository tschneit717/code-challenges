/**
 * @param {number} x
 * @return {boolean}
 */

const samples = [
  121,
  -121,
  10,
  01,
  1000021
];

var isPalindrome = function (x) {
  if (x < 0) return false

  const num = x.toString()
  let result = true;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[num.length - 1 - i]) {
      result = true
    } else {
      result = false
      return result
    }
  }
  return result
};

samples.forEach((sample) => {
  console.log(isPalindrome(sample));
});
