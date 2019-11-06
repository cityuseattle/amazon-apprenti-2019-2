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