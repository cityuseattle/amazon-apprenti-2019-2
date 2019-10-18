import calendar
import datetime

'''

1. Create the list ['k', 'b', 'c'], then create a tuple from that list.


2. Create the tuple ('k', 'b', 'c'), then create a list from that tuple. (Hint: the material needed to do this has been covered, but it's not entirely obvious)

3. Make the following instantiations simultaneously: a = 'a', b=2, c='gamma'. (That is, in one line of code).

4. Create a tuple containing just a single element which in turn contains the three elements 'a', 'b', and 'c'. Verify that the length is actually 1 by using the len() function.

5. Write a program that puts 5, 10, and "twenty" into a list. Then remove 10 from the list.

6. Write a program that puts 5, 10, and "twenty" into a tuple. Then remove "twenty" from the tuple.

7. Write a program that constructs a dictionary mapping 1 to squares(1), 2 to squares(2), ...

8. Write a program that reverses the order of the output from #7

9. Write a program that creates a dictionary mapping 1 to "Monday," 2 to "Tuesday," etc.

10. Sort the dictionary from #9 by value and print its associated key (Hint: the material needed to do this has been covered, but it's not entirely obvious)





11. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. 

Example 

        Input: [0,1,0,3,12] 

        Output: [1,3,12,0,0] 



12. Given an integer array, find three numbers whose product is maximum and output the maximum product. 

Example 

        Input: [1,2,3] 

        Output: 6 

Example: 

        Input: [1,2,3,4] 

        Output: 24 



13. Given an array nums and a value val, remove all instances of that value and return the new length. 

Example:  

        Input: [0,1,2,2,3,0,4,2 ],   val=2 





 Your function should return length=5 with first five elements of nums containing 0,1,3,0,4 

14.
 [apple, orange, banana, kiwi, mango, pineapple] 



    1. Longest word in the array with length 



    2. Smallest in the array with length 



    3. Number of even length fruits, print the count and the fruits 



    4. Number of odd length fruits, print the count and the fruits 





15. Implement RemoveAll operations.





'''


print("Question 1")
testlist = ['k', 'b', 'c']
print("testlist", testlist)
tupletestlist = tuple(testlist)
print(testlist)
print(tupletestlist)

print("Question 2")
testtuple = ("k", "b", "c")
print("testtuple", testtuple)
listtesttuple = list(testtuple)
print(testtuple)
print(listtesttuple)

print("Question 3")

a, b, c = ("a", "b", "gamma")
print(a, b, c)

print("Question 4")

testnested = (("a","b","c"),)
print(len(testnested))

print("Question 5")
testremoval = [5,10,"twenty"]
print("preremoval", testremoval)
print(testremoval.pop(1))
print(testremoval)

print("Question 6")
testremovaltuple = (5, 10 , "twenty")
print("preremoval", testremovaltuple)
testremovaltuple = [x for x in testremovaltuple if x != "twenty"]
print(testremovaltuple)

print("Question 7")
def squaredictionary(num):
    out = {}
    for i in range(0, num + 1):
        out[i] = i ** 2
    return out
squaredict = squaredictionary(10)
print(squaredict)

print("Question 8")
## Question doesn't make any sense. dicts have no defined output order, and thus reversing them is isn't possible nor desireable.
##Please clarify
print("sorted", sorted(squaredict.items(), reverse=True))
squaredictmap = dict(map(lambda x: (x[1], x[0]), squaredict.items()))
print(squaredictmap)
print("Question 9")
def createdaysofweekdictionary():
    out = {}
    for i in range(0, 7):
        out[i + 1] = calendar.day_name[i]
    return out
print(createdaysofweekdictionary())

print("Question 10")
print("Sorted by Value")
print(dict(sorted(createdaysofweekdictionary().items(), key=lambda x: x[1])))


print("Question 11")
def move_zeroes(nums):
    ptr = 0
    end = len(nums) - 1
    while ptr < end:
        if nums[ptr] == 0:
            temp = nums.pop(ptr)
            nums.append(temp)
            end -= 1
        else:
            ptr += 1
move_zeroes_test = [0,1,0,3, 4,5]
print("pre move zeroes", move_zeroes_test)
move_zeroes(move_zeroes_test)
print(move_zeroes_test)


print("Question 12")
def maxthreeproduct(nums):
    newnums = sorted(nums)
    if len(newnums) < 3:
        prod = 1
        for i in range(len(newnums)):
            prod *= newnums[i]
        return prod
    else:
        negmax = newnums[0] * newnums[1] * newnums[len(nums) - 1]
        posmax = newnums[-1] * newnums[-2] * newnums[-3]
    return max(negmax, posmax)

testcase = [[1,2,3], [-1,0,100], [-50,-20, 1, 1, 1, 34, 100], [-1,-2,-3], [-3,-4, -10, 10, 40]]
for i in range(len(testcase)):
    print(testcase[i], "testcase")
    print(maxthreeproduct(testcase[i]))

print("Question 13")
def deleteval(nums, val):
    nums = [x for x in nums if x != val]
    return nums
deletevaltest = [0,1,2,2,3,0,4,2 ]
print("predeleteval", deletevaltest)
postdeletevaltest = deleteval(deletevaltest, 2)
print(len(postdeletevaltest))
print("postdeleteval", postdeletevaltest)

print("Question 14")
fourteentestcase = ["apple", "orange", "banana", "kiwi", "mango", "pineapple"]
print("pre manipulation", fourteentestcase)
#1
print("Longest word")
longestword = max(fourteentestcase, key=len)
print(longestword)
#2
print("Shortestword")
shortestword = min(fourteentestcase, key=len)
print(shortestword)
#3
print("Even Fruits")
evenfruits = list(filter(lambda x: len(x) % 2 == 0, fourteentestcase))
print(evenfruits, len(evenfruits))

#4
print("Odd Fruits")
oddfruits = list(filter(lambda x: len(x) % 2 != 0, fourteentestcase))
print(oddfruits, len(oddfruits))



print("Question 15")
def removeallthing(list, thing):
    while thing in list:
        list.remove(thing)

removealltestlist = ["a", "a", "b", "c", "f", "a"]
print("removealltestlist")
removeallthing(removealltestlist, "a")
print(removealltestlist)






