#if number is even print number // 2 and return
# if odd print/return 3*number+1
def collatz(number):
    if number % 2 == 0:
        return number // 2
    else:
        return 3 * number + 1


num = int(input('Enter a number: '))
if num < 1:
    print(num)
else:
    condition = True
    while condition:
        num = collatz(num)
        print(num)
        if num == 1:
            condition = False

