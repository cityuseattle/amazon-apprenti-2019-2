def sumOfList(userList):
    sumCounter = 0
    for i in range(len(userList)):
        sumCounter += userList[i]
    print(sumCounter)


newList = [8,2,3,0,7]
sumOfList(newList)
