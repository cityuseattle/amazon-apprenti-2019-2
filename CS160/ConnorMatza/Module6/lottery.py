import random

def lottery(n):
    lotterytickets = set()
    while len(lotterytickets) < n:
        lotterytickets.add(random.randint(1000000000, 9999999999))

    winner = random.choice(list(lotterytickets))
    print("The winner is: " + str(winner))

lottery(10000)