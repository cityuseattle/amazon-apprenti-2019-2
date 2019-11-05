# 6. Write a program that puts 5, 10, and "twenty" into a tuple. Then remove "twenty" from the tuple.

myTuple = (5, 10, 'twenty')
myList = []
for i in myTuple:
    myList += [i,]
    print(myList)
myList.remove('twenty')

newTuple = tuple(myList)

print(newTuple)