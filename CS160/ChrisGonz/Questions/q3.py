def uniqueNumber(userList):
    newUnique = []
    
    for i in userList:
        if i not in newUnique:
            newUnique.append(i)
            newUnique.sort()
    print(str(newUnique))


list2 = [1,4,3,3,5,6,6,7,3]
uniqueNumber(list2) 
