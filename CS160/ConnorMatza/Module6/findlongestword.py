def longest_word(filename):
    with open(filename, 'r', encoding="utf-8") as infile:
        words = infile.read().split()
        return max(words, key=len)
        # The second loop in the TA solution is entirely unecessary. You're effectively doing the same processing
        # In this max() call. 
print(longest_word('py.txt'))
