#4. Given an array arr[] of n elements, write a function to search a given element x in arr[].
#Input: [1, 5, 8, 3, 9, 6, 5, 4],   output: target=4 -> True

array1 = [1, 5, 8, 3, 9, 6, 5, 4]

def search(array1, x):
    for index in array1:
        if index == x:
            return(f"target = {x} -> True") #return("target = "+str(x)+"-> True")
    return("False")

print(search(array1, 4))