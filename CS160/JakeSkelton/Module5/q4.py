import array
arr1 = [1, 3, 5, 6, 7, 9, 10]

def search(arr, x): 
  
    for i in range(len(arr)): 
  
        if arr[i] == x: 
            return i 
  


print(search(arr1, 4))