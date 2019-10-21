color = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']

file = open('Color.txt', 'w')
output = ''
for i in color:
    output += i + ' '
file.write(output)