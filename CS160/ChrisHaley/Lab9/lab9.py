class Point:
    ''' Point class represents a 2D point using x and y positions '''
    num_points = 0
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
        Point.num_points+=1

    def get_point(self):
        return (self.x, self.y)
    
    def set_point(self, x, y):
        self.x = x
        self.y = y
    
    def print_point(self):
        print('{}: X={} Y={}'.format(self.__class__.__name__, self.x, self.y))

    def move_points(self, x, y):
        self.x += x
        self.y += y
    
    def __del__(self):
        point_name = self.__class__.__name__
        Point.num_points-=1
        return "{} destroyed".format(point_name)
    

class Point3D(Point):
    ''' The class that represents a 3D point '''
    num_point = 0
    def __init__(self, x=0, y=0, z=0):
        Point.__init__(self, x, y)
        self.z = z
        Point3D.num_point += 1

    # def __del__(self):
    #     class_name = self.__class__.__name__
    #     Point3D.num_point -= 1
    #     return "{} destroyed".format(class_name)

    def delPoint(self):
        class_name = self.__class__.__name__
        Point3D.num_point -= 1
        print('{} destroyed'.format(class_name))
    
    def print_point(self):
        print("X = ", self.x, "Y = ", self.y, "Z = ", self.z)
    
    def set_point(self, x, y, z):
        Point.set_point(self, x, y)
        self.z = z
    
    def move_points(self, x, y, z):
        Point.move_points(self, x, y)
        self.z += z

   


print()
pt1 = Point(100, 100)
pt1.move_points(-100, -100)
pt1.print_point()

print()
pt3d_1 = Point3D(23, 99, 28)
pt3d_1.move_points(39, 99, 22)
pt3d_1.print_point()

print()

#pt3d_1.delPoint()