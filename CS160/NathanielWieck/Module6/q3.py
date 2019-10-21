file1 = open('Py.txt', 'w')
file1.write('Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace.')
file1.close()

file1 = open('Py.txt', 'r')
contents = file1.read()
contentsList = contents.split()
longest = contentsList[0]

for word in contentsList:
    if len(word) > len(longest):
        longest = word

print(f'The longest word is "{longest}" with length {len(longest)}.')