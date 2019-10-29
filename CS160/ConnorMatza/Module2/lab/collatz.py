def collatz(number):
    while(number != 1):
        if number % 2 == 0:
            print(str(number // 2))
            number = number // 2
        else:
            print(str(3 * number + 1 ))
            number = 3 * number + 1

num = int(input("Enter a number: "))
collatz(num)