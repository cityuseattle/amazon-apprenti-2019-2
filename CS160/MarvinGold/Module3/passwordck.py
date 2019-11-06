import hashlib

while True:
    passwd = input('Please enter a password (letters, and numbers only): ')
    if passwd.isalnum():
        if len(passwd) < 8:
            print('Your pasword is too short\n')
        else:
            hpasswd = hashlib.sha256(passwd.encode())
            print('This is your hashed password: ' + hpasswd.hexdigest())
            break
    else:
        print('Sorry, your password can only contain letters and numbers')
        