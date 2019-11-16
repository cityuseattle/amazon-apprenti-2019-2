class Point:
    num_point = 0
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
        Point.num_point += 1
    def get_point(self):
        return (x, y)
    def print_point(self):
        print("X = ", self.x, "Y = ", self.y)
    def set_point(self, x, y): 
        self.x = x
        self.y = y
    def move_points(self, x1, y1):
        self.x += x1
        self.y += y1# add offsets and update the self
    def __del__(self):
        class_name = self.__class__.__name__
        print(class_name, "destroyed")
    x = 0
    y = 0




class Point3D_new(Point):
    ''' The class that represents a 3D point '''
    num_point = 0
    def __init__(self, x=0, y=0, z=0):
        Point.__init__(self, x, y)
        self.z = z
        Point3D_new.num_point += 1
    def print_point(self):
        print("X =", self.x, "Y = ", self.y, "Z = ", self.z)
    def set_point(self, x, y, z):
        Point.set_point(self.x, self.y)
        self.z = z 
    def move_points(self, x1, y1, z1):
        self.x = x1
        self.y = y1
        self.z = z1# add offsets and update the self
    def __del__(self):
        class_name = self.__class__.__name__
        print(class_name, "destroyed")
    z = 0

pt1 = Point(100, 100)
pt1.move_points(-100, -100)
pt1.print_point()

pt3d_1 = Point3D_new(23, 99 , 28)
pt3d_1.move_points(39,99,22)
pt3d_1.print_point()
