colors = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']

file = open("color.txt", "w+")
for color in colors:
    file.write(color + "\n")
file.close()