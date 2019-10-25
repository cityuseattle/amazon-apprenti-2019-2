#4.Get the three integer numbers from a user. Write a program to find the median of three numbers (5 points)

a = float(input("Input number: "))
b = float(input("Input number: "))
c = float(input("Input number: "))
if a > b:
    if a < c:
        median = a
    elif b > c:
        median = b
    else:
        median = c
else:
    if a > c:
        median = a
    elif b < c:
        median = b
    else:
        median = c

print("The median:", median)