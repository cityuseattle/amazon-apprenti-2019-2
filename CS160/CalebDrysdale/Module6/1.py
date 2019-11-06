color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
theColor = open("Color.txt", "w")
for c in color:
    theColor.write("{}\n".format(c))
theColor.close()