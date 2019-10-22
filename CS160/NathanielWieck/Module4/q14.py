list1 = ['apple', 'orange', 'banana', 'kiwi', 'mango', 'pineapple', "watermelon", "fig"]
list2 = ['pear', 'peach', 'raspberry', 'grape', 'tomato', 'cherry', 'blueberry']

def fruitNinja(listIn):
    longest = listIn[0]
    shortest = listIn[0]
    even = 0
    odd = 0
    listEven = []
    listOdd = []

    for i in listIn:
        fruitLen = len(i)
        if fruitLen % 2 == 0:
            even += 1
            listEven.append(i)
        else:
            odd += 1
            listOdd.append(i)
        
        if fruitLen > len(longest):
            longest = i
        elif fruitLen < len(shortest):
            shortest = i

    print("\n[[ NEW LIST FOLLOWING ]]")
    print("Longest: " + longest + ", length " + str(len(longest)))
    print("Shortest: " + shortest + ", length " + str(len(shortest)))
    print("Number of even fruits: " + str(even))
    print("List of even fruits: " + str(listEven))
    print("Number of odd fruits: " + str(odd))
    print("List of odd fruits: " + str(listOdd))

fruitNinja(list1)
fruitNinja(list2)