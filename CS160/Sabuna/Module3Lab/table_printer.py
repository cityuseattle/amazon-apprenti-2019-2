tableData =[['apples', 'oranges', 'cherries', 'banana'],
            ['Alice', 'Bob', 'Carol', 'David'],
            ['dogs', 'cats', 'moose', 'goose']]

def printTable(table):
    colWidth = [0] * len(table)
    for i in range(len(table)):
    # print('number of item\'s in sub-list ' + str(i) + ': ' + str(len(table[i])))
        columnwidth = []
        for j in range(len(table[i])):
            columnwidth.append(len(table[i][j]))
            colWidth[i] = (max(columnwidth))
            # print(colWidth)
    for i in range(len(table[0])): #works only with lists of the same number of items
        line = []
        for j in range(len(table)):
            line.append(str(table[j][i]).rjust(colWidth[j]))
        print(' '.join(line))

tableData = [['apples', 'oranges', 'cherries', 'banana'],
             ['Alice', 'Bob', 'Carol', 'David'],
             ['dogs', 'cats', 'moose', 'goose']]
printTable(tableData)
