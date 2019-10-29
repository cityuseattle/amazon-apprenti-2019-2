#3.Your Python program will count the number of strings that have the same first character and the last character as shown below.

# example:

# input = ['abc', 'xyz', 'aba', '2542']

# output = 2 (since ‘aba’, ‘2542’ have met the criteria) (5 points)

def numstrings_start_equals_end(s):
    return len(list(filter(lambda x: x[0] == x[-1], s)))

test = ['abc', 'xyz', 'aba', '2542']

out = numstrings_start_equals_end(test)
print(out)