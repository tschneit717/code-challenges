/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let active = nums[0];
  let i = 1;
  while (i < nums.length) {
    if (nums[i] == active) {
      nums.splice(i, 1);
    } else {
      active = nums[i];
      i++;
    }
  }
  return nums.length;
};
