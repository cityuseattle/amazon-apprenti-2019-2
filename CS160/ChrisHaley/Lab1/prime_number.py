print('This programn checks a given input to see if it is prime or not')
print('Please enter a number to check')

number = int(input())

for i in range(2, int(number / 2)+1, 1):
    if(number % i == 0):
        print(str(number) + ' is not prime')
        break
else:
    print(str(number) + " is prime")



