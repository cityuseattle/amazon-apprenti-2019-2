print("Enter number to see of it is prime: ")
num = int(input())

if num > 1 : 
    # using the floor division (//)  in the for loop condition.
    for i in range(2, num//2):
        # here the if statement will check to see of a number is divisible by another number. 
        if (num % i ) == 0:
             print(num, " is not a prime number")
             
             break
    else: 
        print(num, "is a prime number ")
else: 
    print(num, "is not a prime number")
