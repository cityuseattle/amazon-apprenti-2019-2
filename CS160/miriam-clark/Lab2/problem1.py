import random
num = random.randint(1, 100)
print("You have 10 attempts to guess a number between 1 and 100.")

for attempts in range(1, 11):
    print("Type a number ")
    guess = int(input())

    if guess < num:
        print("Your number is too low")
    elif guess > num:
        print("Your number is too high")
    else:
        break
if guess == num:
    print("Congratulations, you have chosen the correct number!") 
else:
    print("You have reached the maximum amount of attempts, the correct number was " + str(num) + ".")