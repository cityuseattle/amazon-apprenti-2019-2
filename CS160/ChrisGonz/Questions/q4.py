def searchList(userList, number):
    for i in userList:
        if number not in userList:
            return False
        else: 
            return True

list1 = [1,2,3,4,5,6,7,8,9]
list2 = [1,2,3,6,7,8,9,]
print(searchList(list2, 9))
def pangram(userString):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in alphabet:
        #char is used becuase we are trying to traverse through a string. CHaracters are used as the increment
        if char not in str(userString.lower()):
            return False
    return True
    