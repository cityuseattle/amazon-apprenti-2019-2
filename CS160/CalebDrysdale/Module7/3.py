sentence = "I aspire to develop a clearer understanding of Python Programming"


def removeVowels(sentence):
    vowel= 'aeiou' 
    return ''.join([l for l in sentence if l not in vowel])

print(removeVowels(sentence))