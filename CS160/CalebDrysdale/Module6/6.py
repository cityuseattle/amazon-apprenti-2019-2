import random

def randGen():
    pin = ""
    while(True): 
        for num in range(4):
            pin += str(random.randint(0, 9))
        if(pin.startswith('0')):
            print("Invalid")
            continue
        else:
            break
    return pin

print("PIN:", randGen())