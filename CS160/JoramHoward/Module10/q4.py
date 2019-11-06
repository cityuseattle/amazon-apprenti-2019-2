print('This program will find the median of 3 user selected values!')
a = int(input("Input 1st number: "))
b = int(input("Input 2nd number: "))
c = int(input("Input 3rd number: "))
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

print("The median is...........", median)