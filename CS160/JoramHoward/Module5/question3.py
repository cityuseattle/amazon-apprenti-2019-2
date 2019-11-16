list1 = [1, 2, 3, 3, 3, 3, 4, 5]
list2 = [5, -1, 3, 2, 999]
list3 = [0, 0, 0, 0, 0, 0, 0, 0]
list4 = [0, 0, 0, 0, 7, 0]

def unique(listIn):
    listUnique = []
    for i in listIn:
        count = 0
        for j in listIn:
            if i == j:
                count += 1
                if count > 1:
                    break
        if count <= 1:
            listUnique.append(i)
    print(str(listUnique))

unique(list1)
unique(list2)
unique(list3)
unique(list4)