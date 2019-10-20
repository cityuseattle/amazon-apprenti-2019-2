#Write a function that 
    # asks a user to select a circle or rectangle
import math

def area(length, width):
    return length * width



while True:
    selection = input('''What would you like to do? 
    Get the area of a:\n\t1: Circle\n\t2: Rectangle\n\t3: Exit\n''')
    if selection == '1':
        radius = int(input('What is the radius? '))
        print("\nThe area of the circle is: ", area(radius*radius, math.pi), '\n')
        continue
    elif selection == '2':
        length = int(input('What is the length? '))
        width = int(input('What is the width? '))
        print("\nThe area of the rectangle is: ", area(length, width), '\n')
        continue
    elif selection == '3':
        break
    else:
        print("\ninvalid input")
        continue
