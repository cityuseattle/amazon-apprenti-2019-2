def collatz(x):
    while x != 1:
        if x % 2 == 0:
            x = x//2
            return x
        else:
            x = 3 * x + 1
            return x

x = int(input('enter a numbe'))
while x != 1:
    x = collatz(x)
    print(x)
