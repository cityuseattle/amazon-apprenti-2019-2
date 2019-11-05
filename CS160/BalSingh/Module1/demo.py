print("Please Enter an Integer number")
num = int(input())

if num > 0:
    print(num, "is a positive number.")
elif num == 0:
    print (num, "is zero")
else:
    print(num, " is a negative number.")


    if num >= 0:
        if num > 0:
            print('Positive')
        else:
                print('Zero')
    else:
        print('Negative')

list_num = [6, 2, 3, 5 ,2, 11, 4 ,9, 22, -3, 13, 10, 1]
# Length of the list
item = 0
for item in  list_num:
    print(item)
sum = 0
i = 0
for i in range(len(list_num)):
    sum = sum + list_num[i]
print("total sum = ", sum)

