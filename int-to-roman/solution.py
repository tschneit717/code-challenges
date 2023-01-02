class Solution:
    def intToRoman(self, num: int) -> str:
        romans = ("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I")
        values = (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
        
        i = 0
        result = ""
        while num > 0 :
            while num >= values[i]:
                num -= values[i]
                result += romans[i]
            i += 1
        return result


print(Solution.intToRoman(Solution, 2019))
