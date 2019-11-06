print('This program will sum up numbers from 1 to the number you enter.')
user_input = input('Please enter the ending number: ')
num = int(user_input)
total = 0

while num >= 1:
    total += num
    num -= 1

print(f'The sum is: {total}')