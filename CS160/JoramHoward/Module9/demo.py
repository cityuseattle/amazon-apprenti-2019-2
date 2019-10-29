class Point: 
    '''Point class represents coordinates'''

num_Point = 0

def __init__(self, x= 0, y=0):
    self.x = x
    self.y = y
    Point.num_Point += 1

def print_Point(self):
    print('X = ', self.x, 'Y = ', self.y)

def set_Point(self, x, y):
    self.x = x
    self.y = y
    Point.num_Point = 0

def __del__(self):
    class_name = self.__class__.__name__
    print(class_name, "terminated")

x = 0
y = 0
