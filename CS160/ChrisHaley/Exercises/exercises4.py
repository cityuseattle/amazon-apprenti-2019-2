# Exercises
# 1. Create the list ['k', 'b', 'c'], then create a tuple from that list.
lst = ['k', 'b', 'c']
my_tuple=(tuple(lst))
print(my_tuple)
# 2. Create the tuple ('k', 'b', 'c'), then create a list from that tuple. (Hint: the material needed to do this has been covered, but it's not entirely obvious)
lst2 = list(my_tuple)
print(lst2)
# 3. Make the following instantiations simultaneously: a = 'a', b=2, c='gamma'. (That is, in one line of code).
a, b, c = ["a", 2, "gamma"]
print(a, b, c)
# 4. Create a tuple containing just a single element which in turn contains the three elements 'a', 'b', and 'c'. Verify that the length is actually 1 by using the len() function.
tuple4 = (('a', 'b', 'c'),)
print(len(tuple4), tuple4[0][0], tuple4[0][1], tuple4[0][2])
# 5. Write a program that puts 5, 10, and "twenty" into a list. Then remove 10 from the list.
lst5 = [5, 10, "twenty"]
print(lst5)
lst5.remove(10)
print(lst5)
# 6. Write a program that puts 5, 10, and "twenty" into a tuple. Then remove "twenty" from the tuple.
tuple6 = (5, 10, "twenty")
print(tuple6)
tuple6 = list(tuple6)
tuple6.remove("twenty")
tuple6 = tuple(tuple6)
print(tuple6)

# 7. Write a program that constructs a dictionary mapping 1 to squares(1), 2 to squares(2), ...
mydict = dict()
for x in range(1, 15):
    mydict[x] = x*x
print(mydict)

# 8. Write a program that reverses the order of the output from #7
mydict2 = dict()
copy = mydict.copy()
for x in range(len(copy)):
    i = mydict.popitem()
    mydict2.update({i[0]:i[1]})
    #print(mydict)
del copy
print(mydict)
print(mydict2)
# 9. Write a program that creates a dictionary mapping 1 to "Monday," 2 to "Tuesday," etc.
import calendar
calendar = list(calendar.day_name)
calendarDict = dict()
for x in range(len(calendar)):
    calendarDict[x+1] = calendar[x]
print(calendarDict)

# 10. Sort the dictionary from #9 by value and print its associated key (Hint: the material needed to do this has been covered, but it's not entirely obvious)
for value in sorted(calendarDict.values()):
    KL = list(calendarDict.keys())
    VL = list(calendarDict.values())
    key = KL[VL.index(value)]
    print(value, key)

# 11. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. 
        # Example 
        #         Input: [0,1,0,3,12] 
        #         Output: [1,3,12,0,0] 



# 12. Given an integer array, find three numbers whose product is maximum and output the maximum product. 
        # Example 
        #         Input: [1,2,3] 
        #         Output: 6 

        # Example: 
        #         Input: [1,2,3,4] 
        #         Output: 24 

# 13. Given an array nums and a value val, remove all instances of that value and return the new length. 
        # Example:  
        # Input: [0,1,2,2,3,0,4,2 ],   val=2 



# 14. Your function should return length=5 with first five elements of nums containing 0,1,3,0,4 
    #  [apple, orange, banana, kiwi, mango, pineapple] 
    #     1. Longest word in the array with length 
    #     2. Smallest in the array with length 
    #     3. Number of even length fruits, print the count and the fruits 
    #     4. Number of odd length fruits, print the count and the fruits 

# 15. Implement RemoveAll operations.