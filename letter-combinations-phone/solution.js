
const samples = [
  "23",
  "",
  "2",
]

var letterCombinations = function (digits) {
  const result = [];
  if (digits.length === 0) return [];

  const alpha = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }

  const helper = (i, digits, slate) => {
    if (i === digits.length) {
      result.push(slate.join(''))
      return slate
    }

    let chars = alpha[digits[i]];
    for (let char of chars) {
      slate.push(char);
      helper(i + 1, digits, slate);
      slate.pop();
    }
  }

  helper(0, digits, [])
  return result;
};

samples.forEach((sample) => {
  console.log(letterCombinations(sample));
});
