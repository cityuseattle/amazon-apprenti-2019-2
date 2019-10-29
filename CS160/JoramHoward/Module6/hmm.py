n = int(input('How many odd numbers would you like to add together?'))

thesum = 0
oddnumber = 1
for counter in range(n):
    thesum = thesum + oddnumber
    oddnumber = oddnumber + 2
print(thesum)