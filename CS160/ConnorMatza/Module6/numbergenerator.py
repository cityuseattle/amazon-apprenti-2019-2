import random

def randgen(n):
    print(f"Generating {n} random even numbers")
    for i in range(0, n):
        number = random.randrange(100, 999, 2)
        print(number)
randgen(10)