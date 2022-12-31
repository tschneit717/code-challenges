class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """

        largest = 0
        length = len(height)
        for i in range(len(height)):
            j = length - 1
            while (j > i):
                if height[i] < height[j]:
                    max_num = height[i]
                else:
                    max_num = height[j]
                width = j - i
                if max_num * width > largest:
                    largest = max_num * width
                j = j - 1
        return largest


result = Solution.maxArea(Solution, [1, 8, 6, 2, 5, 4, 8, 3, 7])
if result == 49:
    print("Success")
else:
    print("Failure")
# expected: 49
