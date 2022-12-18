const samples = [
  "abcabcbb",
  "bbbbb",
  "pwwkew",
  "au",
  " ",
  "dvdf",
  "cdd",
  "nfpdmpi"
];

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let length = s.length;

  if(length <= 1) return length

  let result = []
  const split = s.split('')
  let temp = split.reduce((acc, iteration) => {
    if (acc.indexOf(iteration) > -1) {
      const indexOfDupe = acc.indexOf(iteration);
      acc.splice(0, indexOfDupe + 1)
    }
    let newArray = [...acc, iteration]
    if (result.length < newArray.length) {
      result = newArray
    }
    return [...acc, iteration]
  }, [])
  
  if (temp.length > result.length) {
    result = temp
  }
  return result.length;
};

samples.forEach((sample) => {
  console.log(sample, lengthOfLongestSubstring(sample));
});
