nums = input("Give me an integer!\n")

list = {}
for i in range(2,int(nums) + 1):
    list[i] = True

for i in list.keys():
    if list[i] == True:
        for j in range( 2 * i, int(nums) + 1, i):
            list[j] = False
print(list[int(nums)])
