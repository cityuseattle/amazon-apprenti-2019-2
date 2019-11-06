print('How old are you?')
age = int(input())

if age < 21:
    print('You are but a youngling, come back after you have gained some experience.')
elif age >= 80:
    print('Welcome, Jedi Master')
else: 
    print('You may sit on this council, but you will not hold the rank of Jedi Master.')
    