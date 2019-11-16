List1 = [1,2,6,8]

def findin(userinput):
    number = input("Pick a number")
    if number in userinput: 
        print('True')
    else :
        print('no')
    
print(findin(List1))