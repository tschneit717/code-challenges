/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let results = []
    if (nums.length < 3 || nums.length > 3000) return results
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        if (nums[i] === nums[i - 1]) continue
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) {
                    j++
                }
				while (nums[k] === nums[k - 1]) {
                    k--
                }
                j++
                k--
            }
            else if (sum > 0){
				k--;
			} else {
				j++;
			}
        }
    }
    return results
}

const samples = [
    [-1,0,1,2,-1,-4],
    [0,1,1],
    [0,0,0],
    [3,0,-2,-1,1,2],
]
samples.forEach(sample => {
    console.log(threeSum(sample))
})