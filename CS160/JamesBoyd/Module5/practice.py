def area():
    _answer_ = input("Select circle or rectangle: ")
    area = 0
    pi = 3.14
    if _answer_ == "circle":
        radius = int(input("Enter the radius in inches: "))
        area = area + (2 * pi * radius)
        print(area)
    elif _answer_ == "rectangle":
        length = int(input("Enter the length in inches: "))
        width = int(input("Enter the width in inches: "))
        area = area + (length * width)
        print(area)
area()