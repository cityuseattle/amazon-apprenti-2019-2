color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']

newFile = open('colorfile.txt', 'w')

for c in color:
    newFile.write("{}\n".format(c))

newFile.close()


