def collatz(number):

    while n != 1:
        if number % 2 == 0:
            number == number // 2
            return number
        else:
            number = 3 * number + 1
            return number

n = int(input("Give me a number: "))
while n != 1:
    n = collatz(n)
    print(n)
    break
