""" fruit = ['apple', 'mango', 'banana', 'cherry']
fruit2 = []
for f in fruit:
    fruit2.append(len(f))

dict = dict(zip(fruit, fruit2))

print(dict)
 """

fruits = ['apple', 'mango', 'banana', 'cherry']

dict1 = {}
for elem in fruits:
    dict1.update({elem:len(elem)})

print(dict1)

{elem:len(elem) for elem in fruits}