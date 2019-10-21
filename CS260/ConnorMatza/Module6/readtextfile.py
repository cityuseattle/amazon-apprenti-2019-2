text = open("color.txt")

colors = [x for x in text.readlines()]

for color in colors:
    print(color, end = "")