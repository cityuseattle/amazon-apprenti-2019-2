list1 = [8, 2, 3, 0, 7]
list2 = [-3, 0, 1000, 1, -1, -1000, 3]

def sum(listIn):
    print("\nInitial list is: " + str(listIn))
    sum = 0
    for i in listIn:
        sum += i
    print(f"Sum of numbers in the list is: {sum}")

sum(list1)
sum(list2)