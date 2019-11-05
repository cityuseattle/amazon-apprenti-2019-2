numlist = [2, 4, 6, 8]

def summed(user):
    result = 0
    for i in range(len(user)):
        result = user[i] + result
    return result

print(summed(numlist))
    


        