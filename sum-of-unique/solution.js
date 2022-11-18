const samples = [
  [1, 2, 3, 2],
  [1, 1, 1, 1, 1],
  [1, 2, 3, 4, 5]
]

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  nums.sort();
  let uniques = []
  let duplicateNum;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicateNum = nums[i]
    } else if (nums[i] !== duplicateNum) {
      uniques.push(nums[i])
    }
  }
  return uniques.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

};
samples.forEach(sample => {
  console.log(sumOfUnique(sample))
})