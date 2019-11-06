#11. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order 
# of the non-zero elements.     Example      Input: [0,1,0,3,12]     Output: [1,3,12,0,0] 
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