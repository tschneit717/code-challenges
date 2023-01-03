class Solution:
    def reverse(self, x: int) -> int:
        ans = ""
        to_string = str(x)

        if x < 0:
            ans = "-"
            to_string = to_string[1:]
        for i in range(len(to_string) - 1, -1, -1):
            ans += to_string[i]
        ans = int(ans)

        if ans < -2 ** 31 or ans > 2 ** 31 - 1:
            return 0
        return ans


print(Solution.reverse(Solution, -2147483647))
