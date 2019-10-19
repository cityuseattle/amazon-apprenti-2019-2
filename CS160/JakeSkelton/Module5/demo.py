'''
l = input(str)
w = input()
h = input()
r = input()
circle = 3.14 * r * r
square = l * w * h
'''




def calc():
    _input = input('Please select a Circle or Square: ')
    if _input == 'Circle':
        radius = int(input('Enter the Radius:'))
        area = 3.14 * radius * radius
        return area
    

    elif _input == 'Square':
        height = int(input('Please enter Height:'))
        width  = int(input('Please enter Length:'))
        area   = height * width
        return area
    

    else: 
       
      print(area)



print(calc())

