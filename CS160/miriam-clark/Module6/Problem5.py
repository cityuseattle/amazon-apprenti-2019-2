#5.	Lottery game – Generate a 100 Lottery tickets and pick a lucky ticket from it as a winner.
#•	All the lottery numbers must be 10 digits long.
#•	Verify all 1000 ticket numbers are unique using list.
#•	If successful, you can print the winning number from a random pick
#•	If not, print a message “try it again”
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
    print("Lottery ticket winner is: ", winner)
else:
    print("Try again.")