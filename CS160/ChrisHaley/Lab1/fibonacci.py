# Asks user how many Fibonacci numbers to generate and then generates them

while True:
    print('How man fibonacci numbers do you want to generate?')
    total = int(input())
    if (not isinstance(total, int)) or total <= 0:
        print('Invalid input; try again')
        continue
    break

while True:
    print('What position of Fibonnacci numbers do you want to see?')
    position = int(input())
    if (not isinstance(position, int)) or position < 1 or position > total:
        print('Invalid input; try again')
        continue
    break

a = 0
b = 1
nums = [a, b]

if total > 2: 
    for i in range(3, total + 1, 1):
        c = a + b
        nums.append(c)
        a = b
        b = c


print(str(nums))
print('The fibonacci number at position ' + str(position) + ' is: ' + str(nums[position - 1]))



