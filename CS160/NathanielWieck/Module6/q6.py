import random

pin1 = random.randint(1, 9)
pin2 = random.randint(1, 9)
pin3 = random.randint(1, 9)
pin4 = random.randint(1, 9)

pinStr = str(pin1) + str(pin2) + str(pin3) + str(pin4)
pinInt = int(pinStr)

print(pinInt)