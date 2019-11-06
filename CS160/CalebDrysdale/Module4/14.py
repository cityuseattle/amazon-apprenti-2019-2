fruitList = ["apple", "orange", "banana", "kiwi", "mango", "pineapple"]

def longSmall(fruitList):
    longest = fruitList[0]
    smallest = fruitList[0]
    for word in fruitList:
        if len(longest) < len(word):
            longest = word
        if len(smallest) > len(word):
            smallest = word
    return("The longest word is " +str(longest)+ ", and the shortest word is " +str(smallest)+ ".")

print(longSmall(fruitList))

"""def evenOdd(fruitList):
    even = fruitList[0]
    odd = fruitList[0]
    for word in fruitList:
        if (len(word) % 2) == 0:
            even += 1
        else:
            odd += 1
    return(even, odd)
print(evenOdd(fruitList))"""