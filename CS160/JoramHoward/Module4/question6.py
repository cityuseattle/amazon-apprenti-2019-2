myList = []

myList.append(5)
myList.append(10)
myList.append('twenty')
print(myList)
myList.pop(2)
print(myList)

def convert(myList):
    return tuple(myList)

print(convert(myList))