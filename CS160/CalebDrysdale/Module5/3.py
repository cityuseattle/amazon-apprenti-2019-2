list1 = [1, 2, 3, 3, 3, 3, 4, 5]

def uniq(list1):
    uniqList = []
    for element in list1:
        if element not in uniqList:
            uniqList.append(element)
    return(uniqList)

print(uniq(list1))