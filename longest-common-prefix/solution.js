const samples = [
  // ["flower","flow","flight"],
  // ["dog","racecar","car"],
  // ["a"],
  // [""],
  // ["","b"],
  ["aaa","aa","aaa"],
  ["flower","flower","flower","flower"],
  ["c","acc","ccc"],
];

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let longestPrefix = '';
  const loopThroughStringsByIndex = (index) => {
    let hasMatch = false
    let temp = '';
    for (let i = 0; i < strs.length; i++) {
      if (!temp) {
        temp = strs[i][index]
      } 
      if (!temp || longestPrefix.length >= strs[i].length) return
      if (temp === strs[i][index]) {
        hasMatch = true;
      } else {
        hasMatch = false
        return
      }
    }
    if (hasMatch) {
      longestPrefix += temp;
      loopThroughStringsByIndex(index + 1)
    }
  }

  loopThroughStringsByIndex(0)
  return longestPrefix;
};

samples.forEach((sample) => {
  console.log(longestCommonPrefix(sample));
});
