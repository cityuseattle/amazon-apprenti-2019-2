myList = [4, 5, 2, 7]

def maxProduct (myList):
    myList.sort()
    print(myList[len(myList)-1]*myList[len(myList)-2]*myList[len(myList)-3])

maxProduct(myList)