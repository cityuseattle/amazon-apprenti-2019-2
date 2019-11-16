"""1. Write a Python function to find the Max of three numbers. No built-in function used.

Example: input: [2, 5, 1, 4, 8, 3, 2, 9, 4, 7] output= 9

2. Write a Python function to sum all the numbers in a list

Input:[8, 2, 3, 0, 7] output: 20

3. Write a Python function that takes a list and returns a new list with unique elements of the first list.

Input:[1, 2, 3, 3, 3, 3, 4, 5] output:[1, 2, 3, 4, 5]

4. Given an array arr[] of n elements, write a function to search a given element x in arr[].

Input: [1, 5, 8, 3, 9, 6, 5, 4], output: target=4 -> True

5. Write a Python function to check whether a string is a pangram or not.

Note : Pangrams are words or sentences containing every letter of the alphabet at least once.

For example : "The quick brown fox jumps over the lazy dog" -> True """

import string

## Question 1
def max_three_product(nums):
    min1, min2 = float('inf'), float('inf')
    max1, max2, max3 = float("-inf"), float("-inf"), float("-inf")
    
    for i in range(len(nums)):
        if nums[i] < min1:
            min2 = min1
            min1 = nums[i]
        elif nums[i] < min2:
            min2 = nums[i]
            
        if nums[i] > max3:
            max1 = max2
            max2 = max3
            max3 = nums[i]
        elif nums[i] > max2:
            max1 = max2
            max2 = nums[i]
        elif nums[i] > max1:
            max1 = nums[i]
    return max(max1 * max2 * max3, min1 * min2 * max3)
print(max_three_product([1,2,3]))


## Question2:

def sum_all_numbers(nums):
    return sum(nums)
print(sum_all_numbers([1,2,3,4,5,6,7,8]))


## Question3

def return_unique(inputlist):
    return list(set(inputlist))
print(return_unique([1,2,3,4,5,2,2,2,2,2,2,2,2,2,4,5,6,7,8,9,10]))

## Question4

def binary_search_arr(nums, target):
    def recursive_search(arr, target):
        mid = len(arr) // 2
        if len(arr) == 0:
            return False
        if arr[mid] == target:
            return True
        left = recursive_search(arr[0:mid], target)
        right = recursive_search(arr[mid + 1:], target)
        if left or right:
            return True
        else:
            return False
    arr = sorted(nums)
    return recursive_search(arr, target)
print(binary_search_arr([3,4,5,6,7,8,9,10], 7))


## Question 5

def pangram(str):
    compareset = set(list(string.ascii_lowercase))
    print(compareset)
    inputset = set(map(lambda x: x if x in compareset else None, list(str.lower())))
    inputset.remove(None)
    print(inputset)
    return compareset == inputset
print(pangram("The quick brown fox jumps over the lazy dog"))


