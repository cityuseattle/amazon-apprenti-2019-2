def longest_word(filename):
    with open(filename, 'r') as infile:
        words = infile.read().split()
    maxlen = len(max(words, key=len))
    for word in words:
        if len(word) == maxlen:
            return word

print(longest_word('textfile.txt'))

