print('this program will sum of numbners from 1 to a number you enter.')
print('please enter a ending number:')
num = int(input())
total =0
while num >= 1:
 total += num
 num -= 1
 print('the sum is: ' + str(total))