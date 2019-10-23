num = int(input('Please enter a number to determine whether it is a prime number: '))
 
for i in range(2, num):
	if num % i  == 0:
		print('This is not a Prime Number.')
		break
else:
	print('This is a Prime Number.')