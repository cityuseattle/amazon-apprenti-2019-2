def printitem(listNum):
    #for i in range(len(listNum)):
        #if listNum[i] < 0:
            #listNum[i] = abs(listNum[i])
    #return listNum
    return [item for item in listNum if item % 2 == 0]
   


original = [8, 20, 10, 0, 55, 777]
print(printitem(original))
