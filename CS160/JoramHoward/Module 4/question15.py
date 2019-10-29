
list1 = ['overly-confident-people', 'bliss', 'rainbows', 'overly-confident-people', 'harmony', 'overly-confident-people', 'progress']
elem = 'overly-confident-people'

def removeAll(listIn, val):
    print("\nThis is what currently exists in the given list: \n\n" + str(listIn) + "\n\nRemoving " + val + "...")
    listNew = listIn.copy()
    for i in listIn:
        if i == val:
            listNew.remove(val)
    print("\n[[ OPERATION SUCCESS ]]\n\nNow what's left: " + str(listNew) + "\n")
    return(listNew)

list1 = removeAll(list1, elem)