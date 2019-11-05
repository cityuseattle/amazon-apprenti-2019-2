#1.First, get the set of numbers separated by comma. Then generate a list and a tuple with those numbers. (2 points)

values = input("Input comma seprated numbers : ")
list = values.split(",")
tuple = tuple(list)
print('List : ',list)
print('Tuple : ',tuple)