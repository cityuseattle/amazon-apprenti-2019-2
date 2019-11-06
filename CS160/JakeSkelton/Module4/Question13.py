#import array as arr


#val = arr.array('i', [0, 1, 2, 2, 3, 0, 4, 2])

#def remove(val):
    
    #a = val.remove(2)
    #print(len(val))
    #return a
    
#print(remove(val))

list1 = [0, 1, 2, 2, 3, 0, 4, 2]
val1 = 2
list2 = [1, 0, 0, 0, 0, 2, 0, 0, 0, 99, 0]
val2 = 0

def remVal(listIn, val):
    listNew = listIn.copy()
    for i in listIn:
        if i == val:
            listNew.remove(val)
    print("New list length: " + str(len(listNew)))
    print(listNew)
    return(listNew)

list1 = remVal(list1, val1)
list2 = remVal(list2, val2)