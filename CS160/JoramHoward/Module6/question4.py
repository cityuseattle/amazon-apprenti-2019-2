import random

numList = []

count = 0 
while count < 10:
    num = random.randint(100, 1000)
    if num %2 == 0:
        numList.append(num)
        count += 1

print(numList)

