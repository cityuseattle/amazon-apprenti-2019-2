""" class Car:
    

    num_cars = 0 # class variable
    def __init__(self, year, color, model, speed):
        self.year = year
        self.color = color 
        self.model = model 
        self.speed = speed 
        Car.num_cars +=1
    def __del__(self):
        class_name = self.__class__.__name__
        print(class_name, "destroyed")
    def get_year(self):
        return self.year 
    def get_color(self):
        return self.color  """

class Car:
    

    num_cars = 0 # class variable
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
    poin
        
        Car.num_cars +=1
    def __del__(self):
        class_name = self.__class__.__name__
        print(class_name, "destroyed")
    def get_year(self):
        return self.year 
    def get_color(self):
        return self.color 