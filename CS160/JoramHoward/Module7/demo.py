matrix1 = [[1,2,3], [4,5,6], [7,8,9]]
matrix2 = []

for row in matrix1:
    print(row)
    for r in row:
        print(r)
        matrix2.append(r)
print(matrix2)