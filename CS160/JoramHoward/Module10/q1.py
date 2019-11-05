num = str(input("Enter 4 comma separated integers: "))

List1 = num.split (",")

def convert(list):
    return tuple(list)

print(List1)
print(convert(List1))