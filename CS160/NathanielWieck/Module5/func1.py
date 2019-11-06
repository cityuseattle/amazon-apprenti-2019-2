list1 = [2, 5, 1, 4, 8, 3, 2, 9, 4, 7]
list2 = [0, -2, 99, 3, 1000]

def maxNum(listIn):
    print("\nInitial list is: " + str(listIn))
    listOut = []
    count = 0
    while count <= 2:
        highNum = listIn[0]
        for j in listIn:
            if j > highNum:
                highNum = j
        listOut.append(highNum)
        listIn.remove(highNum)
        count += 1
    print("Max 3 numbers in the list are: " + str(listOut))

maxNum(list1)
maxNum(list2)