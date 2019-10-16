income = {   'Alice' : 90000,
              'Bob': 100000,
              'Jeff': 20000,
              'Jake': 999999,
              'Stark': 999998,}

highest = max(income, key=income.get)
print("The richest man on earth:", end=' ')
print(highest + ' with $' + str(income[highest]))