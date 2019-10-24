color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']

myfile = open('abc.txt', 'w')
for i in color:
    myfile.write("{}\n".format(i))
myfile.close()
