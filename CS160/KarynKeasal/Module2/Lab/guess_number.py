import random

guessesTaken = 0

num = random.randint(1, 100)
print('Please guess a number between 1 and 100.')

while guessesTaken < 10:
    print('Take a guess.')
    guess = input()
    guess = int(guess)

    guessesTaken = guessesTaken + 1

    if guess < num:
        print('Your guess is too low. You have taken ', guessesTaken, ' guesses of 10.')
        continue
    elif guess > num:
        print('Your guess is too high. You have taken ', guessesTaken, ' guesses of 10.')
        continue
    elif guess == num:
        break
if guess == num:
    guessesTaken = str(guessesTaken)
    print('Great job! You guessed my number in ' + guessesTaken + ' guesses!')
if guess != num:
    num = str(num)
    print('Sorry, the number I was thinking of was ' + num)