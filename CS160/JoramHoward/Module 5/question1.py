List1 = [7, 3, 9]
List2 = [9, 7, 5, 78, -2, 9, 5, 4, 3, 99, 7, 8, 9, 90]

def high_num(userinput):
    max_num = 0
    for i in range(len(userinput)):
        if userinput[i] > max_num:
            max_num = userinput[i]
    print(max_num)

high_num(List2)