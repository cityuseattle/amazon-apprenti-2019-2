

grid = [['.', '.', '.', '.', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['#', '#', '#', '#', '.', '.'],
        ['#', '#', '#', '#', '#', '.'],
        ['.', '#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#', '.'],
        ['#', '#', '#', '#', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.']]

def rotate(matrix):
    columns = len(matrix[0])
    rows = len(matrix)
    print(matrix[::-1])
    outmatrix = zip(*matrix[::-1])
    return outmatrix
print(str(list((rotate(grid)))))


def testrotate(matrix):
    columns = len(matrix[0])
    rows = len(matrix)
    d = [[None for x in range(rows)] for y in range(columns)]
    for i in range(rows):
        for j in range(columns):
            d[j][rows - i - 1] = matrix[i][j]
    print(d)
print(testrotate(grid))