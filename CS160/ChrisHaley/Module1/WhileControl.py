print('This proram will sum the numbers starting from 1 to the number you enter.')
print('Please enter an ending number: ')
num = int(input())
total = 0

while num >= 1:
    total += num
    num -= 1

print('The sum is: ' + str(total))
