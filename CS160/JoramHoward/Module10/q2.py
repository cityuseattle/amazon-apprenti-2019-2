import operator

List1 = [(2,3), (3,2), (2,1), (4,4)]

List1.sort(key = operator.itemgetter(1))
print(List1)