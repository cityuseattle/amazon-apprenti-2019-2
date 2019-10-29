#1.First, get the set of numbers separated by comma. Then generate a list and a tuple with those numbers. (2 points)

# example:

# input (by user) = 1,4,2,3

# output List = ['1', '4', '2', '3']

# Tuple= ('1', '4', '2', '3')

##NOTE: Input parsing is hard, this assumes a "cooperative user" for time reasons
##In a nontrivial program, there's going to need to be some code to validate the assumptions of the input types.
nums = input("Please enter a set of numbers separated by commas\n>>>").split(',')
tuplenums = tuple(nums)
print(nums)
print(tuplenums)