# random numbers 1-100
import random 
# store the number of guesses by user 
numOfgues = 0
# calls fun and stores value
num = random.randint(1, 100) 
for numOfgues in range(3):
    print('Guess a number between 1 to 100: ') 
    i = input()

    # returns the value as an integer 

    i = int(i)
    if i == num:
        print('you guessed right!')
        break

    # if the number is less than the generated number

    elif i < num:
               print('Try Higher')

    # if the number is greater than the generated number         

    elif i > num:

               print('Try Lower')

# checking to see i the player won or lost 

if i == num:

     numOfgues = str(numOfgues + 1)

     print('Good job, ! You guessed my number in ' +

         numOfgues + ' guesses!')

 

elif i != num:

     num = str(num)

     print('The numer is ' + num + '.') 