print("Please enter an integer number")
num = int(input())

if(num > 0):
    print(num, "this is a positive number")
elif(num < 0):
    print(num, "this is a negative number")
else:
    print(num, "the number is zero")

if num >= 0:
    if num > 0:
        print("positive")
    else
        print("zero")
else:
    print("negative")

list_num = [6, 2, 3, 5, 2, 11, 4, 9, 22, -3, 9, 13, 10, 1]
#Length of the list
item = 0
for item in list_num:
    print(item)

sum = 0
i = 0
for i in range(len(list_num)):
    sum = sum + list_num[i]
print ("total sum = ", sum)
'''
list_num = [6, 2, 3, 5, 2, 11, 4, 9, 22, -3, 9, 13, 10, 1]
counter = 0
i = 0

while i < len(list_num):
    if(list_num[i]%2 ==0 ): 
        counter += list_num[i]
    i = i + 1
print("total = ", counter)

/*mod 2*/