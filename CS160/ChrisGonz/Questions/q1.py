numberlist = [1,3,77,4,5,9,2,8]


def max_number(userList):
    maxNumber = 0 
    for i in range(len(userList)):
        if userList[i] > maxNumber:
            maxNumber = userList[i] 
    print(maxNumber)

max_number(numberlist)
