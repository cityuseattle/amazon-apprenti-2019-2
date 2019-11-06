import random
num = random.randint(1, 100)
condition = 0
while condition < 10:
    guess = int(input('Guess a number between 1 and 100: '))
    
    if guess == num:
        print('Correct!')
        break

    elif guess < num:
               print('Too low')
    elif guess > num:
               print('Too high')
    
    condition+=1

    print('This is guess #', condition)

print('The secret number was ' + str(num) + '!')