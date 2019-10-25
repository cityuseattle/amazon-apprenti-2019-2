def stuff(list1, numcheck):
    for i in list1:
        if i == numcheck:
            return(True)
    return(False)

myList = [1, 5, 8, 3, 9, 6, 5, 4]

print(str(stuff(myList, 2)))