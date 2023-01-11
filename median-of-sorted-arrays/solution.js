/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let combined = nums1.concat(nums2).sort((a, b) => a - b);
  if (combined.length % 2 == 0) {
    return (
      (combined[Math.floor(combined.length / 2)] +
        combined[Math.floor(combined.length / 2) - 1]) /
      2
    );
  } else {
    return combined[Math.floor(combined.length / 2)];
  }
};
