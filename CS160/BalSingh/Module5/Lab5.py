# #1
# list1 = [2, 5, 1, 4, 8, 3, 2, 9, 4, 7]

# print("The largest number is:", max(list1))

# #2
# list1 = [8, 2, 3, 0, 7]

# def sum(list1):
#     total = 0
#     for num in list1:
#         total += num
#     return(total)

# print(sum(list1))

# #3
# list1 = [1, 2, 3, 3, 3, 3, 4, 5]

# def uniq(list1):
#     uniqList = []
#     for element in list1:
#         if element not in uniqList:
#             uniqList.append(element)
#     return(uniqList)

# print(uniq(list1))

# #4
# array1 = [1, 5, 8, 3, 9, 6, 5, 4]

# def search(array1, x):
#     for index in array1:
#         if index == x:
#             return(f"target = {x} -> True")
#     return("False")

# print(search(array1, 4))

# #5
# string1 = 'The quick brown fox jumps over the lazy dog'

# def pangram(string1):
#     string1 = string1.lower()
#     letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
#     for index in range(0, len(string1)):
#         for alpha in letters:
#             if string1[index] == alpha:
#                 letters.remove(alpha)
#         if len(letters) == 0:
#             return("Confirmed as a pangram")
#     return("Negative for pangram")

# print(pangram(string1))

# #6

# print("Hello World"[3])

# #7
# print("armstrong"[2:4])

#8
string1 = "Welcome to the USA. The USA is awesome, isn't it?"

def findAll(string1):
    count = 0
    string1 = string1.lower()
    for index in range(0, len(string1)):
        if string1[index] == "u":
            if string1[index + 1] == "s":
                if string1[index + 2] == "a":
                    count += 1
    print("The USA count is: "+str(count))

print(findAll(string1))