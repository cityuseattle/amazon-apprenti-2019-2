import random
target=random.randint(1, 100)
print(target)

for i in range(1, 11):
    print("Please enter a number: ")
    num = input()

    if num <target:
        print("this is too low")
    elif num>target:
        print('this is too high')
    else:
        print("you are correct")
else:
    print('target number is ' + str(target))