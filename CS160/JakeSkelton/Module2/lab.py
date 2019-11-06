# This is a guess the number game.
import random
secretNumber = random.randint(1, 100)
print('I am thinking of a number between 1 and 100.')

# Ask the player to guess 10 times.
for guessesTaken in range(1, 11):
    print('Take a guess.')
    guess = int(input())

    if guess < secretNumber:
        print('Your guess is too low.')
    elif guess > secretNumber:
        print('Your guess is too high.')
    else:
        break    # This condition is the correct guess!

if guess == secretNumber:
    print('Good job! You guessed my number in ' + str(guessesTaken) + ' guesses!')
else:
    print('Nope. The number I was thinking of was ' + str(secretNumber))