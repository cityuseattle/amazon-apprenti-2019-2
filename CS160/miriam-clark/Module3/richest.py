income = {"Jeff": 999999,
        "Oprah": 777777,
        "Bill": 888888,
        "Clark": 555555,
        "Ivanka": 666666}

highest = max(income, key=income.get)
print("The richest person on earth: ", end="")
print(highest + " with $" + str(income[highest]))