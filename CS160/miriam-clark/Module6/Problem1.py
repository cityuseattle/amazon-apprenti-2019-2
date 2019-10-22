#1In Python, create a list with color names as follows. Then, write the list (individual color names) 
# to a file, say ‘Color.txt’

color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
myColor = open("Color.txt", "w")
for c in color:
    myColor.write("{}\n".format(c))
myColor.close()
