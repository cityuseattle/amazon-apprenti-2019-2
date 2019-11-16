def fib(n):
    if n == 0:
        return 0
    if 0 < n <=2:
        return 1
    else:
        return fib(n-1) + fib(n-2)

n = int(input("Enter a number to perform fibonnaci sequence on "))
print(fib(n))