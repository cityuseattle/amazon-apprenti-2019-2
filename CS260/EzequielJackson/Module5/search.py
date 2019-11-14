arr = [3, 1, 5, 2, 7, 4]
target = int(input('Enter a value: '))
def search(arr):
    if target in arr:
        return True
    else:
        return False
print(search(arr))