
list1 = [0, 1, 3, 2, 0, 9, 4, 0, 5]
list2 = [9, 0, 0, 2, 1, 0]

def sortFunction(list):
    list2 = list
    i = 0
    while i < len(list):
        if list[i] == 0:
            list2.remove(0)
            list2.append(0)
        i += 1
    return(list2)

print(sortFunction(list1))
print(sortFunction(list2))