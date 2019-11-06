myTuple = (5, 10, 'twenty')
myList = []
for i in myTuple:
    myList += [i,]
    print(myList)
myList.remove('twenty')

newTuple = tuple(myList)

print(newTuple)