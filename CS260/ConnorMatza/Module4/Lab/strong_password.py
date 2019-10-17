import re
import hashlib

def strongpassword(password):
    regEx = re.compile(r'(?=\b\w*[A-Z]\w*\b)(?=\b\w*\d\w*)(?=\b\w*[a-z]\w*\b)\w{8,}')
    if re.match(regEx, password):
        print("Valid Password!")
        hashed = hashlib.sha256(password.encode())
        print("Hashed pass is: ", hashed.hexdigest())
    else:
        print("Invalid password! Password must contain one digit, one uppercase letter, one lowercase letter, be at least eight characters long, with no special characters")

test = input("Please enter a password\n>>>")
strongpassword(test)
