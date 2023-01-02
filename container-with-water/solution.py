class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        largest = 0
        max_num = 0
        i = 0
        j = len(height) - 1
        while i < j:
            width = j - i
            if height[i] < height[j]:
                max_num = height[i]
                i += 1
            else: 
                max_num = height[j]
                j -= 1
            if max_num * width > largest:
                largest = max_num * width
        return largest

result = Solution.maxArea(Solution, [1, 8, 6, 2, 5, 4, 8, 3, 7])
if result == 49:
    print("Success")
else:
    print("Failure")
# expected: 49
