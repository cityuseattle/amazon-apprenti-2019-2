#7.	Let’s expand the #6 program. At this time, we have increased the number of users and 4 digit PIN is not holding 
# it. Write a program that can be N digit PIN (N = user input where N >= 4) and generates a random N-Digit Secure 
# PIN Number that starts with non-zero number for example, valid PINs (5823 (N=4), 19283(N=5), 283945(N=6)…) invalid 
# PINs (0293, 00402, 029382).
#•	Get the N from a user that is greater than equal to 4.
#•	The number should have N digits
#•	The number should start with non-zero
#•	Validate the N-digit number
#•	If successful, print the PIN number
#•	If not, repeat the process until you have a valid PIN. (hint: use a while True: )
import random

def randGen(val):
    pin = "" 
    while(True):
        for num in range(int(val)):
            pin += str(random.randint(0, 9))
        if(pin.startswith('0')):
            print("Not valid")
            continue
        else:
            break
    return(pin)
while(True):
    val = input("Enter the number of digits: ")
    if(int(val)>=4):
        print("The", val, "digit secure pin is: " , randGen(val))
        break
    else:
        print("The value has to be greater than or equal to 4. ")
        continue