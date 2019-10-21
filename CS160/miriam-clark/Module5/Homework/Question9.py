#Write a Python program to get a string made of the first 2 and the last 2 characters from a given string.  If
#If the string length is less than 2, return instead of the empty string.
#Sample string: "w3resource"
#Expected result: "w3ce"
#Sample string: "w3"
#Expected: "w3w3"
#Sample string: "w"
#Expected Result: Empty String

def firstLast(string1):
  if len(string1) < 2:
    return " "
  return string1[0:2] + string1[-2:]

print(firstLast("w3resource"))
print(firstLast("w3"))
print(firstLast("w"))