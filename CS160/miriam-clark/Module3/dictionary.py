#compare two lists, two dictionaries  
firstList = ["cats", "dogs", 55]
secList = ["dogs", 55, "cats"]
print(firstList == secList)

#order in dict does not matter
firstDict = {"name": "Miriam", "species": "human", "age": "21"}
secDict = {"species": "human", "age": "21", "name": "Miriam"}
print(firstDict == secDict)

myDog = {"size": "small", "color": "brindle", "disposition": "friendly"}
print("My dog has " + myDog["color"] + " fur.")