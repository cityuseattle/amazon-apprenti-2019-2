list1 = [0, 1, 3, 4, 2]
list2 = [2, 3, 4, 5]
list3 = [2, 99]
list4 = [100, 9828552, 0]
list5 = [10, 10, 10, 10, 0]

def product(list):
    list.sort()
    if len(list) >= 3:
        print(list[-1] * list[-2] * list[-3])
    else:
        print("Invalid list, not enough elements - list is supposed to have at least elements.")

product(list1)
product(list2)
product(list3)
product(list4)
product(list5)