#generate the Fibonacci sequence length
nterms = int(input("How many terms? "))

n1 = 0
n2 = 1
count = 0

if nterms <= 0:
    print("Please enter a positive number")
elif nterms == 1:
    print("Fibonacci sequence upto", nterms, ":")
    print(n1)
else:
    print("Fibonacci sequence upto", nterms, ":")
    while count < nterms:
        print(n1, end=' , ')
        nth = n1 + n2
        n1 = n2
        n2 = nth
        count += 1

#Find the given position within the sequence length
while True:
    a = 0
    b = 1
    npos = int(input("\nWhat position?: "))
    if npos > nterms:
        print("Please enter a number inside the given array.")
        continue
    elif npos <= 0:
        print("Please enter a positive number.")
        continue
    elif npos == 1:
        print("Fibonacci sequence position", npos, ":")
        print(a)
        continue
    else:
        print("Fibonacci sequence postion", npos, ":")
        for i in range(2, npos):
            c = a + b
            a = b
            b = c
        print(b)
        break