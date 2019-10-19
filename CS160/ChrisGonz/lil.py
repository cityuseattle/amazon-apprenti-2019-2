def questionOne(numberList): 
    max_number = 0
    for i in numberList :
        if numberList[i] > max_number : 
            max_number = numberList[1]
    return max_number


newList = [1,2,3,4,5,9,6,7,8,9]
questionOne(newList) 