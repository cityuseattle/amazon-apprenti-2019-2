def collatz(number):
    if (number%2 == 0):
        return(number//2)
    elif (number%2 == 1):
        return(3*number+1)

number = int(input('Enter a number: '))
while True:
    number = collatz(number)
    if number > 1: 
        print(number)
    else:
        number <= 1
        print(number)
        break