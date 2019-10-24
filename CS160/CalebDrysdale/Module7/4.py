fruits = ['apple', 'mango', 'banana', 'cherry']

dict1 = {}
for elem in fruits:
    dict1.update({elem:len(elem)})

print(dict1)

{elem:len(elem) for elm in fruits}