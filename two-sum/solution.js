/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

const samples = [
  { nums: [2, 7, 11, 15], target: 9 },
  { nums: [3, 2, 4], target: 6 },
  { nums: [3, 3], target: 6 },
];

var twoSum = function (nums, target) {
  const indecies = [];
  nums.forEach((_, index) => {
    for (let i = index + 1; i < nums.length; i++)
      nums[index] + nums[i] === target && indecies.push(index, i);
  });
  return indecies;
};

samples.forEach((sample) => {
  twoSum(sample.nums, sample.target);
});
