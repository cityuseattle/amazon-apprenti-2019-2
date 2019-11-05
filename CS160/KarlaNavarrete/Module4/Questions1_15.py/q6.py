list1 = []

list1.append(5)
list1.append(10)
list1.append('twenty')
print(list1)
list1.pop(2)
print(list1)

def convert(list1):
    return tuple(list1)

print(convert(list1))