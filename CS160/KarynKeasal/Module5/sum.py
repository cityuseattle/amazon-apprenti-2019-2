arr = [4, 6, 2, 7, 9]

def sum(arr):
    total = 0
    for i in arr:
        total = total + i
    return total
    
print(sum(arr))