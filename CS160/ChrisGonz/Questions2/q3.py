def longestWord(filenName):
    with open(filenName) as inputFile:
        words = inputFile.read().split()
    max_len = len(max(words, key=len))
    for word in words:
        if len(word) == max_len:
            return word

print(longestWord('textFile.txt'))

