# 1.	Write a Python function to find the Max of three numbers. No built-in function used.
#      Example:  input: [2, 5, 1, 4, 8, 3, 2, 9, 4, 7]   output= 9
def max(lst): 
    max = 0
    for x in lst:
        if x > max:
            max = x
    return max

userInput = [2, 5, 1, 4, 8, 3, 2, 9, 4, 7]
print("#1\n", max(userInput), "\n")

# 2.	Write a Python function to sum all the numbers in a list
# Input:[8, 2, 3, 0, 7]   output: 20
def sum(lst):
    sum = 0
    for x in range(len(lst)):
        sum += lst[x]
    return sum

input2 = [8, 2, 3, 0, 7]
print("#2\n", sum(input2), "\n")

# 3.	Write a Python function that takes a list and returns a new list with unique elements of the first list.
# Input:[1, 2, 3, 3, 3, 3, 4, 5]  output:[1, 2, 3, 4, 5]
def unique(lst): 
    newList = []
    for x in lst:
        try:
            newList.index(x)
        except ValueError:
            newList.append(x)
    return newList
lst3 = [1, 2, 3, 3, 3, 3, 4, 5]
print("#3\n", unique(lst3), "\n")

# 4.	Given an array arr[] of n elements, write a function to search a given element x in arr[].
# Input: [1, 5, 8, 3, 9, 6, 5, 4],   output: target=4 -> True
def searchArr(arr, target):
    return(target in arr)


input4 = [1, 5, 8, 3, 9, 6, 5, 4]
target = 4
print("#4\n", searchArr(input4, target))
print(searchArr(input4, 7))
print()

# 5.	Write a Python function to check whether a string is a pangram or not.
# Note : Pangrams are words or sentences containing every letter of the alphabet at least once.
# For example : "The quick brown fox jumps over the lazy dog" -> True
def ispangram(str): 
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in alphabet: 
        if char not in str.lower(): 
            return False
    return True
      
string = 'The quick brown fox jumps over the lazy dog'
invalidString = 'The quick brown fox jumps over the dog'
print("#5\n", ispangram(string))
print(ispangram(invalidString))
print()


# Strings
# 1: Write a string index that returns just the letter 'r' from 'Hello World'
#  Ex. "Hello World"[0] returns 'H'
#  you should only write one line of code for this; do not assign
print("String #1\n", "Hello World"["Hello World".find('r')], "\n")

# 2: Use string slicing to grab thwe word 'ink' from inside 'tinker'
# For example, 'education'[3:6] returns 'cat'
print("String #2\n", "tinker"[1:4], "\n" )

# 3: Find all occurrences of “USA” in given string ignoring the case
# Expected Outcome:
s3 = "Welcome to USA. Isn't use awesome?"
match = "usa"
new = s3.lower()
print("String #3\n", len(new.split(match)) - 1, "\n")
 

# 4:   Write a Python program to get a string made of the first 2 and the last 2 chars from a given a string. If the string length is less than 2, return instead of the empty string
# •	Sample String : 'w3resource'
# •	Expected Result : 'w3ce'
# •	Sample String : 'w3'
# •	Expected Result : 'w3w3'
# •	Sample String : ' w'
# •	Expected Result : Empty String
print("String #4")
str5 = "w3resource"

if len(str5) < 2:
    print("Empty String")
else: 
    print(str5[0:2] + str5[-2] + str5[-1])


 

