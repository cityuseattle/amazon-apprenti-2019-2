import random

lotteryNums = []
for i in range(100):
    lotteryNums.append(random.randrange(10**9, 10**10-1))
valid = True
lotteryNums.sort()
for item in range(len(lotteryNums)): 
    if item < len(lotteryNums)-1 and lotteryNums[i] == lotteryNums[i]+1:
        print("invalid")
        valid = False
        break
if valid == True:
    winner = random.choice(lotteryNums)
    print("Lucky lottery ticket is", winner)
else:
    print("Please try it again.")