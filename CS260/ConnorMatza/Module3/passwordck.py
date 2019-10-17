import hashlib
while True:
    password = input('Please enter a password(letters and numbers only: ')
    if password.isalnum():
        print("You've just created your password.")
        if len(password) < 8:
            print('Your password is too short.\n')
        else:
            print(type(password))
            hpasswd = hashlib.sha256(password.encode())
            print('This is your hashed password: ' + hpasswd.hexdigest())
            break

    else:
        print("Sorry, password can contain only letters and numbers")