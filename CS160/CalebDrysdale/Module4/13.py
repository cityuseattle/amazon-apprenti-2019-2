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