income = {'Alice': 90000,
            'Bob': 100000,
            'Jeff': 20000,
            'Api': 99998,
            'Stark': 999999}
         
#highest = max(income, key=income.get)
#print("The richest man on earth:", end='')
#print(highest + ' with $' + str(income[highest]))

highest = max(income, key=income.get)
print("The richest man on earth:", end='')
print(highest + 'with $' + str(income[highest]))
