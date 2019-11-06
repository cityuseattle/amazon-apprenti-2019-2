print('This program will add the integers from 1 to an integer you enter.')
print('Please enter an ending integer: ')
num = int(input())
total = 0

while num >= 1:
    total += num
    num-= 1

print('The sum is: ' + str(total))