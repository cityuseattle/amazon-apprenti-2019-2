# Create function


def printTable(m):
    for row in m:
        l = len(max(row, key=len))
        print(l)
        for i in range(len(row)):
            row[i] = ' ' * (l-len(row)) + row[i]

    print('\n'.join([' '.join([row[i] for row in m]) for i in range(len(m[0]))]))



tableData=[['apple', 'oranges', 'cherries', 'banana'],
             ['Alice', 'Bob', 'Carol', 'David'],
             ['dogs', 'cats', 'moose', 'goose']]

printTable(tableData)
