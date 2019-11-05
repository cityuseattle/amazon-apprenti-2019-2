user_input = input("How old are you? ")
age = int(user_input)
if age < 22:
    print('You are too young to drink.')
elif age >= 80:
    print('Ok, you will get a free drink.')
else:
    print('Sure, enjoy a drink.')