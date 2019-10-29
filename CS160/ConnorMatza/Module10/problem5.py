#5.Write a Python program to find unique triplets whose three elements would result in the sum of zero from a set of n integers. (8 points)

# example:

# input = 1 -6, 4, 2, -2, 2, 0, -2, 0

# |-----| ==> sum = -1 ‘not correct’

# |-----| ==> sum = 0 'correct triplet!'

# |-------| ==> sum = 4 ‘not correct’

# |-----| ==> sum = 0 'correct triplet!

def modified_three_sum(n, target):
    ptr1 = 0
    ptr2 = 2
    out = []
    current_triple = [n[0], n[1], n[2]]
    print(current_triple)
    if len(n) < 3:
        return out
    while ptr2 < len(n) - 1:
        print(current_triple)
        if sum(current_triple) == target:
            out.append(tuple(current_triple))
        current_triple.pop(0)
        ptr2 += 1
        current_triple.append(n[ptr2])
    return out

test_input = [1, -6, 4, 2, -2, 2, 0, -2, 0]
print("Test input is" + str(test_input))
test_out = modified_three_sum(test_input, 0)
print(test_out)



