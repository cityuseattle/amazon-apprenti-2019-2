list1 = [1, 5, 8, 3, 9, 6, 5, 4]
val1 = 4
list2 = [-1, 1, 0, 11]
val2 = 100

def analyze(listIn, val):
    for i in listIn:
        if i == val:
            return(True)
    return(False)

print(str(analyze(list1, val1)))
print(str(analyze(list2, val2)))