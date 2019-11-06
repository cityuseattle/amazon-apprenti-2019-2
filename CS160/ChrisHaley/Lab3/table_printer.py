def printTable(lst):
    print()
    #find longest string in each column for the column widths
    colWidths = [0]*len(lst)
    for x in range(len(lst)):
        for i in range(len(lst[x])):
            if len(lst[x][i]) > colWidths[x]:
                colWidths[x] = len(lst[x][i])

    # find rjust() length by getting largest column width
    colWidths.sort()
    width = colWidths[-1]

    #Now print the table
    for x in range(len(lst[0])):
        for i in range(len(lst)):
            print(lst[i][x].rjust(width), end='')
        print() 
    print()


tableData = [['apples', 'oranges', 'cherries', 'banana'],
             ['Alice', 'Bob', 'Carol', 'David'],
             ['dogs', 'cats', 'moose', 'goose']]

printTable(tableData)