income = {'Alice': 9000,
'Bob': 10000,
'Jeff': 20000,
'Apiwat': 99998,
'Stark': 99999}

highest = max(income, key=income.get)
print("The richest man on earth:", end=' ')
print(highest + ' with $' + str(income[highest]))