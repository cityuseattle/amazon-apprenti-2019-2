def area():
    answer = input('select circle or rectangle: ')
    area = 0
    pi = 3.14
    if answer == 'circle':
        radius = int(input('Enter the radius in inches: '))
        area = area + (2 * pi * radius)
        print(area)
    elif answer == 'rectangle':
        length = int(input('Enter the length in inches: '))
        width = int(input('Enter the width in inches: '))
        area = area + (length * width)
        print(area)
    else:
        print('please follow the directions exactly')

area()