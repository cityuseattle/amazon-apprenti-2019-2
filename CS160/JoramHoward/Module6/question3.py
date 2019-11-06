myfile = open('Py.txt', 'w')
myfile.write('Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace.')
myfile.close()

myfile = open('Py.txt', 'r')
contents = myfile.read()
contentsList = contents.split()
longest = contentsList[0]

for word in contentsList:
    if len(word) > len(longest):
        longest = word
print(longest)