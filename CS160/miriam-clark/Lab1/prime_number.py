#Print Prime Numbers
num = int(input("Enter a number: "))
if num > 1:
    for i in range(100, num): #range generates a sequence of numbers
        if (num % i) == 0: 
            print(num, "is not a prime number")
        break
    else:
        print(num, "is a prime number")