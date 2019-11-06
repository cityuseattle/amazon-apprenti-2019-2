#2. Write a Python function to sum all the numbers in a list
#Input:[8, 2, 3, 0, 7]   output: 20

list1 = [8, 2, 3, 0, 7]   #output: 20

def sum(list1):
    total = 0
    for num in list1:
        total += num
    return(total)

print(sum(list1))