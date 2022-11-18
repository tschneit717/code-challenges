/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const samples = [
  [
    [4, 5, 6, 0, 0, 0],
    3,
    [1, 2, 3],
    3,],
  [
    [1, 2, 3, 0, 0, 0],
    3,
    [2, 5, 6],
    3
  ],
  [
    [1],
    1,
    [],
    0
  ],
  [
    [0],
    0,
    [1],
    1
  ]
]

var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }
  let prevNum;
  let nextNum;
  for (let i = 0; i < nums1.length; i++) {
    if (i < nums1.length) {
      nextNum = nums1[i + 1]
    }
    if (i > 0) {
      prevNum = nums1[i - 1]
    }
    if (nums1[i] === undefined) {
      nums1.splice(i, 1)
    }
    while (nums1[i] < prevNum) {
      nums1[i - 1] = nums1[i]
      nums1[i] = prevNum
      prevNum = nums1[i - 1]
      i = 0
    }

    while (nums1[i] > nextNum) {
      nums1[i + 1] = nums1[i]
      nums1[i] = nextNum
      nextNum = nums1[i + 1]
      i = 0
    }
  }

};

samples.forEach((sample) => {
  merge(...sample);
});
