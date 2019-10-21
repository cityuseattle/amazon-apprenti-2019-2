print(str(int_num) + "->" + my_string)

print(f"int_num = {int_num} and my_string = {my_string}")

#list/dictionary are mutable
#tuple not mutable
myList = []
type(myList)
<class "list">
myList = ["apple", 24, "Kate", 23, [1, 2, 3]]
myList[0]
type(myList[-1])
<class "list">
myList[-1][0]
myList.insert(0, "Seattle")
myList.insert(len(myList), "Philadelphia") #adds to the end
myList.append("theEnd")
myList.pop()  #without and index, deletes the last item  i.e myList.pop(0)
myList.remove("Kate")
dir(myList)
#RemoveAll()
for i in myList:    # i = item in a for loop (variable)
    print("my item = ", item)  #or print(item, end = " ")  adds on one line

list(range(1, 10)) #lists the range of 1 through 10
list(range(1, 10, 3)) #lists numbers 1-10 incrementing by 3

for item in range(1, len(myList)):
    print("item = ", myList[item])

myListNum = [1, 9, 5, 3, -6]
print(myListNum.sort()) #or sorted(myListNum)
sorted(myListNum, reverse = True)


myTuple = ()
myTuple = {"rocks", 0 , "scissors", 1, "paper", 2} #not editable
myTuple[0:2] #square brackets accesses list of items  () leads to function

for i in myTuple: #i equals item
    print(i) 

for a_point in points:
    x, y = a_point
    print(f"x = {x}, y = {y}")

mydict1 = {'a':'apple', 'b':'banana'}
mydict2 = dict({'a':'apple', 'b': 'banana'})
mydict3 = dict([('a', 'apple'), ('b', 'banana')])  #key value has to be unique

mydict2 = dict({'z': 'zebra', 'b': 'bat', 'm': 'monkey'})
print(mydict2)
for k, v in mydict2.items(): #mydict2.keys or mydict2.value
    print(k, v)

    #Module 5
#[::-1]  reverse split
#class.function
dir() #displays all created variables

class.replace("this", "that")
test[0] == 'H'  #checks all the way to the end [-1]
test.startswith("")

def greeting(name, message):
    str = f"what's up {name}"   #print("what\'s" up' + "name")
    return str

str = greeting("Tim", "Goodmorning!")
print(str)

def calc_age(current_year, birth_year)
    age = current_year - birth_year
    return(age)

my_age = calc_age(2019, 1984) #calls the function with your parameters

def boundaries(target, margin):
    low = target-margin
    high = margin-target
    return(low, high)

low, high = boundaries(100, 20) #creates and prints variable

def farToCel(far): #fahrenheit to celcius function
    cel = (far-32)*5/9 #or return(far-32)*5/9
    return(cel)
#f100_in_cel = farToCel(100)
#print(f100_in_cal)
print(farToCel(100)) #prints 100Far in Celisuis

def celToFar(cel):
    far = (cel*9/5) + 32 #or return(cel*9/5) + 32 
    return(far)
#c0_in_far = celToFar(0)
#print(c0_in_far)

train_mass = 22680
train_acceleration = 10
train_distance = 100

def get_force(mass, acceleration):
    return mass*acceleration

train_force = get_force(train_mass, train_acceleration)
print(train_force)


def dog_years(name, age):
  return name+", you are "+str(age*7)+" years old in dog years"

print(dog_years("Lola", 16))

my_baby_bool = "true"
print(type(my_baby_bool))
my_baby_bool_two = True
print(type(my_baby_bool_two))