def firstLast(userInput): 
    firstTwo = userInput[:2]
    LastTwo = userInput[-2:]
    newString = firstTwo + LastTwo
    print(newString)


phrase = "the quick brown fox jumped over the lazy dog"
firstLast(phrase)