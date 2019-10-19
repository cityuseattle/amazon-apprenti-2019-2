def main():
    while True:
        choice = input("First, choose a shape!:\n\n1 Circle\n2: Rectangle\n(Enter 1 or 2 to continue):\n")
        try:
            shape = int(choice)
            if shape < 1 or shape > 2:
                print("You have fat fingers - input must be the integer 1 or 2, try again!\n")
                continue
            else:
                break
        except ValueError:
            print("You have fat fingers - input must be the integer 1 or 2, try again!\n")

    if shape == 1:
        while True:
            choice = input("What is the radius of your circle?:\n")
            try:
                rad = float(choice)
                if rad < 0:
                    print("You must enter a number that is equal to or greater than 0 - try again!\n")
                    continue
                else:
                    break
            except ValueError:
                print("You must enter a number that is equal to or greater than 0 - try again!\n")
        result1 = areaCir(rad)
        print(result1)
    else:
        while True:
            choice = input("What is the x value of your rectangle?:\n")
            try:
                x = float(choice)
                if x < 0:
                    print("You must enter a number that is equal to or greater than 0 - try again!\n")
                    continue
                else:
                    break
            except ValueError:
                print("You must enter a number that is equal to or greater than 0 - try again!\n")

        while True:
            choice = input("What is the y value of your rectangle?:\n")
            try:
                y = float(choice)
                if y < 0:
                    print("You must enter a number that is equal to or greater than 0 - try again!\n")
                    continue
                else:
                    break
            except ValueError:
                print("You must enter a number that is equal to or greater than 0 - try again!\n")
        result2 = areaRect(x,y)
        print(result2)

def areaCir(r):
    return(3.14 * r ** 2)

def areaRect(x, y):
    return(x * y)

main()