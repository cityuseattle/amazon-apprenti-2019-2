sentence = "the quick brown fox jumps over the lazy dog"


def removeVowels(sentence):
    vowel= 'aeiou' 
    return ''.join([l for l in sentence if l not in vowel])

print(removeVowels(sentence))