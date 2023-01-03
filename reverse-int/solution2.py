class Solution:
    def reverse(self, x: int) -> int:
        res = 0
        is_positive = x > 0
        limit = abs(x)
        while limit > 0:
            rem = limit % 10
            limit //= 10
            res = res * 10 + rem
        res = res if is_positive else res * -1
        if -2 ** 31 <= res <= 2 ** 31 - 1:
            return res
        return 0


print(Solution.reverse(Solution, 12342222223))
