from functools import reduce

mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]

semiflat = filter(lambda x: x % 2 == 0, reduce(lambda x, y: x + y, mat))
print(list(semiflat))