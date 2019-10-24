#1
myList = ['k', 'b', 'c']
myTuple = ()
for i in myList:
    myTuple += (i,)
print(myTuple)

#2
myTuple = ('k', 'b', 'c')
myList = []
for i in myTuple:
    myList.append(i)
print(myList)

#3
a, b, c = 'a', 2, 'gamma'
print(a, b, c)

#4
myTuple = (('a', 'b', 'c'), )
print(len(myTuple))

#5

myList = []
myList.append(5)
myList.append(10)
myList.append('twenty')
print(myList)
myList.remove(10)
print(myList)

#6

myTuple = (5, 10, 'twenty')
myList = []
for i in myTuple:
    myList += [i,]
    print(myList)
myList.remove('twenty')
newTuple = tuple(myList)

print(newTuple)

#7

squares = {1:'one', 2:'two'}
for i in squares:
    print(squares.get(i))

#8
squares = {1:'one', 2:'two'}
for i in range(2, 0, -1):
    print(squares.get(i))

#9
d = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3}

print(d.get('Monday'))
print(d.get('Tuesday'))
print(d.get('Wednesday'))

#10
d = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3}
sorted(d.values())
for key in sorted(d.keys()) :
    print(key)

#11
numList = [0,1,0,3,12]

def reorder(newList, numList):
    for num in newList:
        if num == numList:
            newList.remove(numList)
            newList.append(numList)
            newList.remove(numList)
            newList.append(numList)
            return newList

print(reorder(numList,0))

#12

numList = [1,2,3,5,6]
val = 2

def removeIn(numList, val):
    index = 0
    count = numList.count(val)
    while index < count:
        numList.remove(val)
        index += 1
    print(len(numList))  
        
removeIn(numList, val)

#13
numList = [0,1,2,2,3,0,4,2]
val = 2

def removeIn(numList, val):
    index = 0
    count = numList.count(val)
    while index < count:
        numList.remove(val)
        index += 1
    print(len(numList))  
        
removeIn(numList, val)

