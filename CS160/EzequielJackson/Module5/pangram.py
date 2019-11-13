alpha = "abcdefghijklmnopqrstuvwxyz"
sentence = input('Input a sentence to validate as pangram: ')

def pangram(sentence):
    for char in alpha:
        if char not in sentence:
            return False
    return True
print(pangram(sentence))