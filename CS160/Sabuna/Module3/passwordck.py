import hashlib
while True:
    passwd = input('please enter a password (letters, and numbers only):')
    if passwd.isalnum():
        print("You've just created the your password.")
        if len(passwd) < 8:
            print('your password is too short. \n')
        else:
            hpasswd = hashlib.sha256(passwd.encode())
            print('This is your hashed password: ' + hpasswd.hexdigest())
            break
    else:
        print('sorry, password can contain only letters and numbers.')

    