cities = {"Austin": 1234, "El Paso": 43234, "Houston": 12312, "Dallas": 2341,}

class Solution:
    def print_name_and_sort(self, list):
        res = sorted(list.items(), key=lambda x: x[1])

        for entry, val in res:
            print(entry, val)

        return res


print(Solution.print_name_and_sort(Solution, cities))