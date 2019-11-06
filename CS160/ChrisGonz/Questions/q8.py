def occurenceWords(userInput, word):
    phrase = userInput.lower()
    print("The word {} occurs ".format(word) + str(phrase.count("usa")))


input_str = ("The USA USA USA USA USA is very usa, becuase it is awesome")

occurenceWords(input_str, "usa")
