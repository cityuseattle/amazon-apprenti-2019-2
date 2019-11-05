sentence = 'Use a dictionary comprehension to count the length of each word in a sentence'
results = {word: len(word) for word in sentence.split()}
print(results)
