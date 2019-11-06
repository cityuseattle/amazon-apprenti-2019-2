import math
from Skip import skip


#****************************************************************
# 0. Print
#****************************************************************
int_numb = 12
my_str   = 'This is my string'
flt_numb = 3.14159

print(int_numb, my_str, flt_numb)
# basics
print("int_numb = ", int_numb)
print("flt_numb = ", flt_numb)
print("my_str = ", my_str)
# string-fy
print("int_numb = " + str(int_numb))
print("flt_numb = " + str(flt_numb))
print("str_numb = " + my_str)
# formatted
print(f'int_numb = {int_numb}, flt_numb = {flt_numb}, str = {my_str}')
print('first number is {value1} and second number is {value2} then final string is \'{value3}\''.format(value1 = int_numb, value2 = flt_numb, value3 = my_str))
print("value is {}".format(round(10.92)))
print("{}! {}!".format("Hello", "Seattle"))

#****************************************************************
# 1. List 
#****************************************************************
# How to define a list
mylist = [] # empty list

# How to assign values to a List
mylist = ['apple', 24, 'Kate', 23, [2,3,4]]

# How to access values to a list
mylist[0]  # first item (forward (0th index))
mylist[-1] # last item (backwards)

# How to slice the entries in a List [x:y] ==> x to y-1 (=item before y)
#                                    [x:] ==> x to the last
#                                    [:y] ==> first to y-1 (=item before y)
#                                    [:]  ==> all
mylist[1:3] # 1 to 3-1
mylist[3:]  # 3 to the end
mylist[:3]  # first to 3-1
mylist[:-2] # first to one item before (the 2nd to the last)

# How to add an entry in a list
# insert(index, new_value) 
mylist.insert(4, 'Seattle')
mylist.insert(5, 54)
mylist.insert(6, 'Seattle')
# append(new_value) # no need to add index since we know it is appending
mylist.append(-293)

# How to remove an entry in a list
# item = pop(index) index-th item , pop() => last
mylist.pop(3)
# remove(value) the first occurrence of value
mylist.remove('Seattle')

# How to traverse the list
for i in mylist:
    print(i, end=' ')   # print all items / line
    #print(i)            # print one item  / line

for i in range(1, len(mylist)):
    print(f"item {i} = ", mylist[i])

# few important built-in methods
mylist.sort()   # sort the list Note: modifying the list (aka *IN PLACE*)
mylist.count()  # count the number of occurrence
len(mylist)     # returns the number of items in the list


#****************************************************************
# 2. Tuple
#****************************************************************
# Note: Tuples may be created directly or converted from lists. 
# How to define a tuple
mytuple = () # empty tuple

mytuple = ("rocks", 0, "scissors", 1, "paper", 2)
#   or without ()
# mytuple = "rocks", 0, "scissors", 1, "paper", 2

# How to access values to a list
mytuple[0]  # first item (forward (0th index))
mytuple[-1] # last item (backwards)

# How to slice the entries in a tuple [x:y] ==> x to y-1 (=item before y)
#                                     [x:] ==> x to the last
#                                     [:y] ==> first to y-1 (=item before y)
#   
mytuple[1:3] # 1 to 3-1
mytuple[3:]  # 3 to the end
mytuple[:3]  # first to 3-1
mytuple[:-2] # first to one item before (the 2nd to the last)

# no addition (immutable)
# no insert (immutable)
# no append (immutable)
# no remove (immutable)

# How to traverse the tuple
for i in mytuple:
    print(i, end=' ')   # print all items / line
    #print(i)            # print one item  / line
skip(2)
for i in range(1, len(mytuple)):
    print(f"item {i} = ", mytuple[i])

# more example (sub-tuples inside a tuple)
points = ((1.2,-2.3), (13.3,-2.9), (24.3,-3.5)) # (x, y) coordinates
for point in points:
    x, y = point
    print(f"x = {x}, y = {y}")

# few important built-in methods
# x, y = 0.24, 3.28
a, b, c, d, e, f = mytuple # 'unpacking' mytuple example above
p1, p2, p3 = points # 'unpacking points example above
len(mytuple)    # returns the number of items in the tuple


#****************************************************************
# 3. Dictionary
#****************************************************************
# How to define a dictionary
mydict = {}

# How to initialize a dictionary
# setdefult(key, default_value) returns default value for the associated key when the key is first introduced
# mydict = {'a': None, 'b': None, 'c': None, 'd': None, 'e': None}
mydict.setdefault('a', None)
mydict.setdefault('b', None)
mydict.setdefault('c', None)
mydict.setdefault('d', None)
mydict.setdefault('e', None)

# How to assign values to a dict
# examples of different data types
mydict = {'a': 'apple', 'b': 'ball', 'c': 'corn'}
mydict1 = {'name': 'John', 1: [2,4,3]}
# Using the dict() contructor
# Note: {} requires ":"  {a:b,...}
#       [] requires ","  [(a,b),...]
mydict2 = dict({'a':'apple', 'b':'ball', 'c':'corn'})
mydict3 = dict([('a','apple'),('b','ball'), ('c','corn')])

# How to access values to a list
# access via keys
mydict['a']
mydict.get('b')

# No slicing available for dictionary
# since slicing is possible with only integers

# How to add an entry in a dictionary
mydict.setdefault('a', None)
mydict.setdefault('b', None)
mydict.setdefault('c', None)
mydict.setdefault('d', None)
mydict.setdefault('e', None)

mydict['a'] = 'animal'
mydict['b'] = 'beach'
mydict['c'] = 'cat'
mydict['d'] = 'desk'
#{'a': 'animal', 'b': 'beach', 'c': 'cat', 'd': 'desk', 'e': None}

# How to remove an entry in a dictionary
# pop('key') removes the entry by returning its associated value
mydict.pop('d')
# popitem() removes the last entry by return both key and value. (incorrect documentation)
mydict.popitem()
# clear() removes all the items, no questions asked
mydict.clear()

# How to traverse the list
mydict2 = dict({'z':'zebra', 'b':'ball', 'c':'corn'})
# iteration via unpacking each tuple
for key, value in mydict2.items():
    print(key, '->', value)
# iteration via items
for item in mydict2.items():
    print(item)
# iteration via keys
for key in mydict2.keys():
    print(key)
# iteration via values
for value in mydict2.values():
    print(value)    

# membership testing
'a' in mydict.keys()        # checking key
'apple' in mydict.values()  # checking value
('a', 'apple') in mydict.items() # checking a key-value pair


# sorting a dictionary by key
for key in sorted(mydict2):
    print(key, '->', mydict2[key])
# sorting a dictionary by value and then 
# find the associated key via listify the dictionary
for value in sorted(mydict2.values()):
    KL = list(mydict2.keys())
    VL = list(mydict2.values())
    key = KL[VL.index(value)]
    print(key, '->', value)    


# few more examples (optional)
# cloning a dictionary with fromkeys()
mydict3={}
mykeys = mydict2.keys()
mydict.fromkeys(mykeys)
values = 0
mydict3.fromkeys(mykeys, values)

# Converstions list -> tuple
# Converstions tuple -> list
# Converstions dict -> tuple
dict1 = {'a': 1, 'b': 2}
tuple(dict1.items())

dict1 = {'a': 1, 'b': 2}
list(dict1.items())
list(dict1.keys())
list(dict1.values())


# Exercises
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
'''

#****************************************************************
# 4. Functions
#****************************************************************

# function that takes 0 parameter with 1 local var
def greeting ():
    name = "you" # local variable
    print("Hello, " + name + "! Good morning!")
greeting()

# functions that take 1 input parameter
def greeting (name):
    print("Hello, " + name + "! Good morning!")

name = input("What is your name? ")
greeting(name)

# functions that take 2 input parameters
def greeting2 (name, msg):
       print("Hello, " + name + "! " + msg)

name = input("What is your name? ")
greeting2(name)

# function that prints the minimum value from the passed-in list
def my_min(m):
    x = min(m)
    return x

mylist = [5, 2, 1, 3, 9, 2, 13]
minvalue = my_min(mylist)
print (minvalue)

'''
Write a function that   (1) asks dimension of a rectangle (width, height) from a user
                        (2) passes the parameters into a function called area
                        (3) computes the rect_area
                        (4) returns the results
                        (5) print the result from the main function
'''                        