#2.Write a Python program to get a list, sorted in increasing order by the last element in each tuple from a given list of non-empty tuples. You can assume that each tuple has 2 elements. (5 points)

# example:

# input = [(2,3), (3,2), (2,1), (4,4)]

# output [(2,1), (3,2), (2,3), (4,4)

import copy
#This works for any list that has a guaranteed second element in 
##The tuple. Without such guarantees I can't guarantee this function will work
def sort_by_element(nums):
    ##Forcing pass-by-val
    internal_nums = copy.deepcopy(nums)
    internal_nums.sort(key=lambda x: x[1])
    return internal_nums

nums = [(2,3), (3,2), (2,1), (4,4)]
nums = sort_by_element(nums)
print(nums)
