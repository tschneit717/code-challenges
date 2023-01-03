class Solution:
    def searchRange(self, nums, target):
        res = [-1, -1]
        if target not in nums:
            return res
        for i, val in enumerate(nums):
            if val == target and res[0] == -1 :
                res[0] = i
                res[1] = i
            elif val == target:
                res[1] = i
        return res
            

print(Solution.searchRange(Solution, [5,7,7,8,8,10], 6))  # [-1, -1]
print(Solution.searchRange(Solution, [5,7,7,7,7,7,8,8,10], 7))  # [1, 5]
print(Solution.searchRange(Solution, [5,7,8,8,10], 7))  # [1, 1]