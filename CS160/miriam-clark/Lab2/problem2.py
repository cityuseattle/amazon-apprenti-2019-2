def collatz(num):
    
    if num % 2 == 0:
        print(num // 2)
        return num // 2

    elif num % 2 == 1:
        result = 3 *  num + 1
        print(result)
        return result

n = input("Type a number: ")
while n != 1:
    n = collatz(int(n))