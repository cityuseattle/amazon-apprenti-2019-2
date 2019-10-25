mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]

mat2 = [r for row in mat for r in row if r % 2 == 0]

print(mat2)