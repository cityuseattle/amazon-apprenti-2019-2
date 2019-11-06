#6. Write a program that puts 5, 10, and "twenty" into a tuple. Then remove "twenty" from the tuple.
myTuple = (5, 10, "twenty")
#You cannot remove an element from a tuple!!!!  Must change to a list, then change it back 
myList = list(myTuple)
myList.remove("twenty") #myList.pop(2)
myTuple = tuple(myList)
print(myTuple)