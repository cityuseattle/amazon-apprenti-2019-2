import re

def checkPassword(pwd):
    print("\nThe password being checked is: ", pwd, "\n")
    if len(pwd) >= 8:
        if re.search(r'[a-z]', pwd) and re.search(r'[A-Z]', pwd):
            if re.search(r"\d", pwd):
                if not re.search(r"\s", pwd):
                    print('Strong Password')
                else:
                    print('Cannot use spaces, tabs, whitespace, etc in your password')
            else:
                print('Invalid: expect at least one digit (0-9)')
        else:
            print('Invalid: expect at least one upper and one lower character')
    else:
        print('Invalid: Password needs to be at least 8 characters long')
    print()


checkPassword(input('Enter in a password to check for strength:\n'))
