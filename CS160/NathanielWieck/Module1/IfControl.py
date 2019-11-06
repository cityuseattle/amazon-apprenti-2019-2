print('How old are you?')
age = int(input())

if age < 21:
    print('You are too young to have a drink!')
elif age >=80:
    print("You get a free drink since you're a senior citizen!")
else:
    print('What can I get ya?')