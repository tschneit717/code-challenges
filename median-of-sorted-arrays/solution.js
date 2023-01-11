/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let combined = nums1.concat(nums2);
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < combined.length; i++) {
      if (combined[i - 1] > combined[i]) {
        done = false;
        let temp = combined[i - 1];
        combined[i - 1] = combined[i];
        combined[i] = temp;
      }
    }
  }
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
