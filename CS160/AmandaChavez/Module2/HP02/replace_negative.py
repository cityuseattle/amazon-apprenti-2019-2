def replace_negative(listNum):
    for i in range(len(listNum)):
        if listNum[i] < 0:
            listNum[i] = abs(listNum[i])
    return listNum

original = [8, 20, -10, 0, 55, -777]
print(replace_negative(original))

input_list=[1,2,3,4,4,5,6,7,7]
output_list=[item for item in input_list if item % 2 == 0]


