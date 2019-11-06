import random

def pinGen(n):
    pinStr = ''
    for i in range(n):
        if i == 0:
            pinStr += str(random.randint(1,9))
        else:
            pinStr += str(random.randint(0,9))
    print(pinStr)

while True:
    userInput = input("Enter a number for how long you want your PIN to be (equal to or greater than 4): ")
    try:
        n = int(userInput)
        if n < 4:
            print("What's your problem dude(ette) - I said the number must be at least 4 try again!")
            continue
        else:
            break
    except ValueError:
            print("Do you know what a number is? Try again, and the number must be at least 4!")

pinGen(n)