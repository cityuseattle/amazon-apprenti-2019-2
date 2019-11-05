color = ['red', 'blue', 'brown']

f = open("text.txt", "w")
for i in color : 
    f.write(color[i])

f.close()