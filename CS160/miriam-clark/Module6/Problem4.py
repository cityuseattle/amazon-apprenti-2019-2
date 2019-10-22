#4.	Generate 10 random even integers between 100 and 999.
import random

for num in range(10):
    print(random.randrange(100, 999, 2))