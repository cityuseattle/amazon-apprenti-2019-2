import math

def user():
    print("Select circle or rectangle: ")
    choice = input()
    while choice != "circle" or "rectangle":
        if choice == "circle":
            print("what is the radius? ")
            radius = int(input())
            area = math.pi*(radius**2)
            print(area)
            break
        elif choice == "rectangle":
            print("What is the length? ")
            length = int(input())
            print("What is the width? ")
            width = int(input())
            area = length*width
            print(area)
            break
        else:
            print("You did not make a valid selection.  Please try again. ")
            choice = input()
    
user()