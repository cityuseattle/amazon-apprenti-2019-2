colors = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']

myfile = open('color.txt', "w")

for c in colors:

    myfile.write("{}\n".format(c))

myfile.close()