class Solution:
    def permute(self, nums):
        res = []

        # If there is only one option, return a copy of whatever was passed in
        if len(nums) == 1:
            return [nums[:]]
        
        # iterate over range
        for i in range(len(nums)):
            # pull off first character in list and assign n to it
            n = nums.pop(0)

            # recursively call itself
            perms = self.permute(self, nums)

            # So here, it calls itself until there is only one character left, see like 14
            # perms then becomes all possible options for that particular decision tree
            for perm in perms:
                perm.append(n)

            # add permutations to the result
            res.extend(perms)
            # take the number that was removed and add it back to the end of nums
            nums.append(n)
        return res


result = Solution.permute(Solution, [1, 2, 3])
print(result)