import random

#Generate random number between 1 and 100
num = random.randint(1, 100)
#print(num)

print('A random number between 1 and 100 was generated. Can you guess it?')

count = 0
while count < 10:
    count += 1
    guess = int(input('What is your guess? '))
    if guess < num:
        print("Too low")
        continue
    elif guess > num:
        print("Too high")
        continue
    elif guess == num:
        print('Correct')
        break
else:
    print('The secrete was', num)