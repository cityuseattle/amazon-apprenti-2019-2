sentence = 'Python programming seems to be significantly more intuitive than other languages I have seen before.'

results = {word: len(word) for word in sentence.split()}

print(results)