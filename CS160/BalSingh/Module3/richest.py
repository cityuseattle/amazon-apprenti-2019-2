income = {'Alice': 90000,
            'Bob': 100000,
            'Jeff': 200000,
            'Apiwat': 999998,
            'Stark': 999999}

highest = max(income, key=income.get)
print("The richest man on earth:", end=' ')
print(highest + ' with $' + str(income[highest]))