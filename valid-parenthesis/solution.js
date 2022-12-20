/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

const samples = [
  "()",
  "()[]{}",
  "(]",
  "]}]",
  "({)}",
  "({})",
  "()()([]{})",
  "(])",
  "(){}}{"
];

var isValid = function (s) {
  const match = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let stack = [];
  stack.push(s[0])
  for (let i = 1; i < s.length; i++) {
    if (stack.length > 0) {
      if (match[s[i]]) {
        stack.push(s[i])
      } else if (match[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      }
      else {
        stack.push(s[i])
      }
    }
    else {
      stack.push(s[i])
    }
  }
  return stack.length === 0;

};

samples.forEach((sample) => {
  console.log(isValid(sample));
});
