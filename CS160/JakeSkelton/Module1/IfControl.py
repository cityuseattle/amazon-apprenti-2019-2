print('How old are you?')
age = int(input())

if age < 21:
    print('You are too young to have a drink.')
elif age >= 80:
    print('OK, you get a special drink.')
else:
    print('Enjoy your drink')
