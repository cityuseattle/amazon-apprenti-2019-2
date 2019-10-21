#3. Write a Python function that takes a list and returns a new list with unique elements of the first list.
#Input:[1, 2, 3, 3, 3, 3, 4, 5]  output:[1, 2, 3, 4, 5]

list1 = [1, 2, 3, 3, 3, 3, 4, 5]  #output:[1, 2, 3, 4, 5]

def uniq(list1):
    uniqList = []
    for element in list1:
        if element not in uniqList:
            uniqList.append(element)
    return(uniqList)

print(uniq(list1))