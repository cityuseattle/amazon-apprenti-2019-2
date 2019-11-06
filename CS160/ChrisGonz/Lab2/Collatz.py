def collatz(number) : 
    if number%2 == 0 :
        print(number//2)
    else:
        print((number * 3) + 1)

userInput = int(input("Please enter a number: "))

collatz(userInput)
