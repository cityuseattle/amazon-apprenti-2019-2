sentence = "the quick brown fox jumps over the lazy dog"

words = sentence.split()

word_length = [len(words) for words in words if words != "the"]

print(words)
print(word_length)