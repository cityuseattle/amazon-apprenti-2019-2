#3.Your Python program will count the number of strings that have the same first character and the last character as shown below.

def wordSimilarities(words):
  ctr = 0

  for word in words:
    if len(word) > 1 and word[0] == word[-1]:
      ctr += 1
  return ctr

print(wordSimilarities(['abc', 'xyz', 'aba', '2542']))