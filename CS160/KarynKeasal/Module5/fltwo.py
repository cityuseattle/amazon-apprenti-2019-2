string = input('Please enter a string to be processed: ')

if len(string) > 2:
    print(string[0], string[1], string[-2], string[-1])
else:
    print ('Empty string')
