# Exercises
# 1. Create the list ['k', 'b', 'c'], then create a tuple from that list.
a = ['k', 'b', 'c']
print(tuple(a))
# 2. Create the tuple ('k', 'b', 'c'), then create a list from that tuple. (Hint: the material needed to do this has been covered, but it's not entirely obvious)
a = ('k', 'b', 'c')
list(a)
# 3. Make the following instantiations simultaneously: a = 'a', b=2, c='gamma'. (That is, in one line of code).
a, b, c = ['a', 2, 'gamma']
print(a, b, c)
# 4. Create a tuple containing just a single element which in turn contains the three elements 'a', 'b', and 'c'. Verify that the length is actually 1 by using the len() function.
a = (('a', 'b', 'c'),)
print(len(a))
# 5. Write a program that puts 5, 10, and "twenty" into a list. Then remove 10 from the list.
a = [5, 10, 'twenty']
print(a)
a.remove(10)
print(a)
# 6. Write a program that puts 5, 10, and "twenty" into a tuple. Then remove "twenty" from the tuple.
a = ('5', '10', 'twenty')
print(a)
b = list(a)
print(b)
b.remove('twenty')
a = tuple(b)
print(a)
#### THIS IS A TRICK QUESTION, YOU CANT REMOVE ANYTHING FROM A TUPLE...but you can convert and remove...###
# 7. Write a program that constructs a dictionary mapping 1 to squares(1), 2 to squares(2), ...
mydict = dict()
for x in range(1, 15):
    mydict[x] = x*x
for key, value in mydict.items():
    print(key, '->', value)
# 8. Write a program that reverses the order of the output from #7
mydict2 = dict()
copy = mydict.copy()
for x in range(len(copy)):
    i = mydict.popitem()
    mydict2.update({i[0]:i[1]})
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
import calendar
calendar = list(calendar.day_name)
calendarDict = dict()
for x in range(len(calendar)):
    calendarDict[x+1] = calendar[x]
for value in sorted(calendarDict.values()):
     KL = list(calendarDict.keys())
     VL = list(calendarDict.values())
     key = KL[VL.index(value)]
     print(value, '->', key) 

# RAN OUT OF TIME COULD NOT COMPLETE THE OTHER PROBLEMS...or the lab....
