import random
hiddennumber = random.randint(1, 100)
count = 0
while count < 10:
    guess = input("Guess a number between 1 and 100\n")
    guess = int(guess)
    if guess < hiddennumber:
        print("Too low\n")
        print(count)
        count += 1
    elif guess > hiddennumber:
        print("Too high\n")
        print(count)
        count += 1
    else:
        print("Correct!")
        quit()
        break
print("Too bad, try again")
quit()