tableData = [['apples', 'oranges', 'cherries', 'banana'],
        ['Alice', 'Bob', 'Carol', 'David'],
        ['dogs', 'cats', 'moose', 'goose']]



stuff = max(map(lambda x: max(x, key=len), tableData), key=len)
print(stuff)
length = len(stuff)

for i in range(0, len(tableData)):
    for j in range(0, len(tableData)):
        newstring = tableData[i][j].rjust(length)
        print(newstring + "\t",  end="")
    print()
#length = max(map(print, map(lambda y: y, tableData)))
#print(length)
