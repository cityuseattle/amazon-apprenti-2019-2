def FIB(t):
    t = int(input("How many Fibonacci numbers do you want to print?:"))
    if t == 0:
        return 0
    elif t == 1:
        return 1
    else:
        return FIB(t-1)+FIB(t-2)
 print(FIB(10))