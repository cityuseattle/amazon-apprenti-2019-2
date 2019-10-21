#1
color = ['Red', 'Green', 'Wite', 'Black', 'Pink', 'Yellow']
file=open('Color.txt', 'w')
for x in color:
    file.write("{}\n".format(x))
file.close()

#2
def read(fName):
    file = open(fName)
    print(file.read())
    file.close()

read('Color.txt')

#3
content = '''Python is an interpreted, high-level, general-purpose programming language. Created by
Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability
with its notable use of significant whitespace.'''

with open('Py.txt', 'w') as f:
    f.write(content)

with open('Py.txt', 'r') as f:
    words = f.read().split()
    longestWord = (max(words, key=len))
    print("Longest word is: ",longestWord)
    print("Longest word length: {} characters".format(len(longestWord)), "\n")

#4
import random
for x in range(10):
    print("{}: ".format(x+1), random.randint(100, 999))

#5
tickets = []
for x in range(100):
    tickets.append(int(random.random()*10000000000))

duplicates = 0
for x in range(len(tickets)):
    if tickets.count(x) > 1:
        duplicates+=1
    
if duplicates > 0:
    print("\nHave duplicates; try again")
else:
    print("\nWinning # is: ", random.choice(tickets), "\n")

#6
pin = '0'
while pin.startswith('0'):
    pin = (str(random.randint(1000, 9999)))
print("\nPin: ", int(pin), "\n")

#7
def generatePIN(size):
    if size >= 4:
        nPin = '0'
        while nPin.startswith('0'):
            nPin = ''
            for x in range(size):
                nPin += str(random.randint(0, 9))
        print("PIN: ", int(nPin), "")
    else:
        print("PIN size needs to be >= 4")

print("#7: Calling 4 times: ")
generatePIN(5)
generatePIN(9)
generatePIN(7)
generatePIN(3)
print()


