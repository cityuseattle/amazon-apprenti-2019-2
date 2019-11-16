List1 = [4, 7, 8, 5, 1, -3]
List2 = [1, 2, 5]

def total_num(userinput):
    result = 0
    for i in userinput:
        result += i
    print(result)

total_num(List1)