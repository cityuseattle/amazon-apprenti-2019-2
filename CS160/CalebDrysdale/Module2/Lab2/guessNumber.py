import random
n = random.randint(1, 99)
guess = int(raw_input('Please guess a number between 1 and 100: '))
while n != 'guess':
    print
    if guess < n:
        print('Too low')
        guess = int(raw_input('Please guess a number between 1 and 100: '))
    elif guess > n:
        print('Too high')
        guess = int(raw_input('Please guess a number between 1 and 100: '))
    else:
        print('Correct')
    else: 
        print('You have reached the maximum number of guesses. The correct answer is )
        break
    print