# print('please input a prime number')
# num = input()
num = input("Please enter a number")
isprime=True
for a in range(2, num/2):
    if num%a ==0:
        isprime=False
    
if isprime==True and num>= 2:

    print('this is the prime number')

else:
    print('this is not the prime number')