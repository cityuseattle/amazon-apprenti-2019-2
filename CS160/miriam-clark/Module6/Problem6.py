#6.	Generate a random 4-Digit Secure PIN Number that starts with non-zero number for example, valid PINs (5823, 9283…) invalid PINs (0293, 0002).
#•	The number should have 4 digits
#•	The number should start with non-zero
#•	Validate the 4-digit number
#•	If successful, print the PIN number
#•	If not, repeat the process until you have a valid PIN. (hint: use a while True: )
import random

def randGen():
    pin = ""
    while(True): 
        for num in range(4):
            pin += str(random.randint(0, 9))
        if(pin.startswith('0')):
            print("not valid")
            continue
        else:
            break
    return pin

print("The PIN is:", randGen())