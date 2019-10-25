string1 = 'The quick brown fox jumps over the lazy dog'

def pangram(string1):
    string1 = string1.lower()
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for index in range(0, len(string1)):
        for alpha in letters:
            if string1[index] == alpha:
                letters.remove(alpha)
        if len(letters) == 0:
            return("Confirmed as a pangram")
    return("Negative for pangram")

print(pangram(string1))