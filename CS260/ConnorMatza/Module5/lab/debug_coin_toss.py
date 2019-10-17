import random

guess = ''
count = 0
guessdict = { "heads": 0, "tails": 1}
while count < 2:
    guess = input(('Guess the coin toss! Enter heads or tails:'))
    toss = random.randint(0, 1) # 0 is heads, 1 is tails
    if guess not in guessdict.keys():
        print("Invalid input, try again")
        continue
    if toss == guessdict[guess]:
        print('You got it!')
        break
    else:
        print('Nope!')
        count += 1
        if count == 2:
            print("You lose!")
        else:
            print("Guess again!")
