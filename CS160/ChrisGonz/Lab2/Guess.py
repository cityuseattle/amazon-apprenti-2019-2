import random 

randomNumber = random.randint(1, 100)
userNumber = 0
guessCount = 0
triesLeft = 10


while userNumber != randomNumber and guessCount < 10 :
    userNumber = int(input("Please Guess a Number between 1 - 100: "))
    #guessCount=0
    if userNumber < randomNumber: 
        print("Your guess is lower than my number!")
        print("You have " + str(triesLeft) + " tries left")
        guessCount+= 1
        triesLeft -= 1
    elif userNumber > randomNumber:
        print("Your guess is greater than my number!")
        print("You have " + str(triesLeft) + " tries left")
        guessCount+= 1
        triesLeft -= 1
    else: 
        print("Correct!")
        print(guessCount)

print("Sorry, the correct number was " + str(randomNumber))


