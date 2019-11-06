print("Please enter a Prime Number!")
num = int(input())

if num==0 or num==1:
        print("Not")

for i in range(2, num):    
    if num%i ==0 :  
        print(num, "Not PRIME Time!")
        break
else:
    print("Prime Number")   