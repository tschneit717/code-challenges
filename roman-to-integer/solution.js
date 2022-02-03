/**
 * @param {string} s
 * @return {number}
 */

const samples = ['III', 'LVIII', 'MCMXCIV'];

// Submission starts here
const romanToInt = function (s) {
  const getRomanNumValue = (numeral) => {
    switch (numeral) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
    }
  };

  const splitArr = s.split('');
  let totalNum = 0;
  for (let i = 0; i < splitArr.length; i++) {
    if (getRomanNumValue(splitArr[i]) < getRomanNumValue(splitArr[i + 1])) {
      totalNum +=
        getRomanNumValue(splitArr[i + 1]) - getRomanNumValue(splitArr[i]);
      i++;
    } else {
      totalNum += getRomanNumValue(splitArr[i]);
    }
  }
  return totalNum;
};
// Submission ends here

samples.forEach((sample) => {
  romanToInt(sample);
});
