print("Please Enter an integer Number")
num = int(input())

if num > 0:
    print(num, "is a positive number.")
elif num == 0:
    print(num, " is zero.")
else:
    print(num, " is negative number.")


if num >= 0:
    if num > 0:
        print('Positive')
    else:
        print('zero')
else:
    print('Negitive')

list_num = [6, 2, 5, 2, 11, 4, 9, 22, -3, 9, 13, 10, 1]
#Length of list 
item = 0
for item in list_num:
    print(item)