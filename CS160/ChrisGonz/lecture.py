def areaOfShape() : 
    shape = input("Choose circle or rectangle: " )
    if shape == "circle" :
        
        
        radius = int(input("What is the radius of circle: "))
       
       
        area = (3.14) * (radius**2)
        return print("The area is " + str(area))
    elif shape ==  "rectangle" :
        length = int(input("what is the length of the rectangle: "))
        width = int(input("What is the width of the rectangle: "))
        area = int(length) * int(width)
        return print("The area is " + str(area) +"cubic square")
    else :
            print("idiot!") 
    


areaOfShape()
print("abdcdsdc")
print("128837237")