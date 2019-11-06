def Fibonacci(n):
    a=0
    b=1
    if n==1:
        return 0
    elif n==2:
        return 1
    elif n<1:
        print("Invalid Number")
        return 0

    for i in range(n-2):
        c=a+b
        a=b
        b=c
    return c

print(Fibonacci(int(input("Pick first Fibonacci number."))))
