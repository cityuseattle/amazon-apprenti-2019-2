backpack = ['book', 'laptop', 'pen', 'banana', 2, True]

#append() - adds to the end of the list
backpack.append('keys')

#insert() - adds to any index in the list
backpack.insert(0, 'charger')

#remove() - removes object from the list using object name
backpack.remove('book')

print(backpack)


def replace_negative(listNum):
    for i in range(len(listNum)):
        if listNum[i] < 0: 
            listNum[i] = abs(listNum[i])
    return listNum

original = [8, 20, -10, 0, 55, -777]


print('Original list: ' + str(original))
print('Negatives Replaced: ' + str(replace_negative(original)))


#list comprehension
input_list = [1,2,3,4,4,5,6,7,7]
output_list = [item for item in input_list if item % 2 == 0]
print(output_list)
