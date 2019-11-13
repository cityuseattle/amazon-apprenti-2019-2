arr = [1, 1, 2, 2, 3, 4, 4, 4, 5]

def uni(arr):
    uni_list = []
    for x in arr:
        if x not in uni_list:
            uni_list.append(x)
    return uni_list
print(uni(arr))