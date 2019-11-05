class Car:
    ''' Car class represents cars in year, color, model and speed '''
    def __init__(self, year, color, model, speed):
        self.year = year
        self.color = color 
        self.model = module 
        self.speed = speed 
    def set_speed(self, new_speed):
        self.speed = new_speed
    def set_year(self, new_year):
        self.year = new_year
    def set_color(self, new_color):
        self.color = new_color
    def is_running(self):
        ret =False
        if(self.speed > 0):
            ret = True
        return ret
    def printall(self)
        return '{} {} {} \t Current running at {}'.format(self.year, self.color, self.model, self.speed)
    def __del__(self):
        class_name = self.__class__.__name__
        print(class_came, "is being out of scope destroyed")

    car1 = Car("2009", "Red", "Focus", "SS")
    print(car1.printall())

    print(car1.is__running())
    