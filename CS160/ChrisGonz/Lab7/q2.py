inputString = "the quick brown fox jumps over the lazy dog"
wordsInString =  inputString.split()
words_length = [len(word) for word in wordsInString if word !="the"]
print(wordsInString)
print(words_length)