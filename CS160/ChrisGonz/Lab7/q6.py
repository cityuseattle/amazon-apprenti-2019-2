

mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12],[13,14,15,16]]

evenList = [i for row in mat for i in row if i %2 == 0]
print(evenList)
print(mat)