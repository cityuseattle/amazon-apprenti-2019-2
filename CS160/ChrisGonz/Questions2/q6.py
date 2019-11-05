import random 
def securePin():
    pin = ""
    for i in range(4):
        pin += str(random.randint(0, 9))
    return pin

print('The 4-digit secure PIN is:', securePin())