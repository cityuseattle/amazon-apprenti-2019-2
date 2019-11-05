def num(numList):
    max_num = 0
    for i in range(len(numList)) :
        if numList[i] > max_num :
            max_num = numList[i]
    return max_num

myList = [4, 9, 6]

print(num(myList))