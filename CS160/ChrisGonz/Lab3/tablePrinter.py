tableData=[['apples', 'oranges', 'cherries', 'banana'],
        ['Alice', 'Bob', 'Carol', 'David'],
        ['dogs', 'cats', 'moose', 'goose']]

newTable = {0: [], 1: [], 2: [], 3:[]}

for lis in tableData : 
    for i in range(len(lis)):
        newTable[i].append(lis[i])

longest = 0 

for k, v in newTable.items():
    length = len(''.join(v))
    if length > longest:
        longest = length
    
for k, v in newTable.items():
    print(' ' * (longest - len(''.join(v))) + ' '.join(v))