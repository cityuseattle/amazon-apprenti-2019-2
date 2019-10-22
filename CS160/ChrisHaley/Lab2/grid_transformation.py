grid = [['.', '.', '.', '.', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['#', '#', '#', '#', '.', '.'],
        ['#', '#', '#', '#', '#', '.'],
        ['.', '#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#', '.'],
        ['#', '#', '#', '#', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.']]
    


for i in range(0, len(grid[0]), 1):
    for x in range(len(grid), 0, -1):
        print(grid[x-1][i], end='')
    print()

#Using the transposed method
# transposed=[[row[i] for row in grid] for i in range(6)]

# for i in range(0, len(transposed), 1):
#     for x in range(0, len(transposed[i]), 1):
#         print(transposed[i][x], end="")
#     print()
