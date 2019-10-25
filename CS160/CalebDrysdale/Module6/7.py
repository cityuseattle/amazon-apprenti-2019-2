import random

def randGen(val):
    pin = "" 
    while(True):
        for num in range(int(val)):
            pin += str(random.randint(0, 9))
        if(pin.startswith('0')):
            print("Invalid")
            continue
        else:
            break
    return(pin)
while(True):
    val = input("Enter the desired length of PIN: ")
    if(int(val)>=4):
        print("The", val, "digit PIN:" , randGen(val))
        break
    else:
        print("The PIN must be four or more characters in length.")
        continue