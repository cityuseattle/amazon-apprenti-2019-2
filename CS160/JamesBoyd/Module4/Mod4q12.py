""" 12. Given an integer array, find three numbers whose product is maximum and output the maximum product. 

Example 

        Input: [1,2,3] 

        Output: 6 

Example: 

        Input: [1,2,3,4] 

        Output: 24  """


myList = [4, 5, 2, 7]

def maxProduct (myList):
    myList.sort()
    print(myList[len(myList)-1]*myList[len(myList)-2]*myList[len(myList)-3])

maxProduct(myList)