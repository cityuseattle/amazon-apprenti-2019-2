import random

def pinGen(n):
        pinStr = ''
        for i in range(n):
            if i == 0:
                pinStr += str(random.randint(1, 9))
            else:
                pinStr += str(random.randint(0, 9))
        print(pinStr)

while True:
    userInput = input('Enter a PIN length(must be at least 4 digits):')
    try:
        n = int(userInput)
        if n < 4:
            print('Number must be greater than or equal to 4')
            continue
        else:
            break
    except ValueError:
        print('Please enter a number 4 or greater.')

pinGen(n)