""" mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]
mat2 = []

for row in mat:
    for r in row:
        if r % 2 == 0:
            mat2.append(r)

print(mat2) """

mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]

mat2 = [r for row in mat for r in row if r % 2 == 0]

print(mat2)


""" matrix1 = [[1,2,3], [4,5,6], [7,8,9]]
matrix2 = []

for row in matrix1:
    print(row)
    for r in row:
        print(r)
        matrix2.append(r)
print(matrix2) """