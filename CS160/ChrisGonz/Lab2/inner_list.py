grid = [['.', '.', '.', '.', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['#', '#', '#', '#', '.', '.'],
        ['#', '#', '#', '#', '#', '.'],
        ['.', '#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#', '.'],
        ['#', '#', '#', '#', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.']]


transposed = []

for i in range(6):
    transposed_row = []
    for row in grid:
        transposed_row.append(row[i])
    transposed.append(transposed_row)
    print(' '.join(transposed_row))


 