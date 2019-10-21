#5. Write a Python function to check whether a string is a pangram or not.
#Note : Pangrams are words or sentences containing every letter of the alphabet at least once.
#For example : "The quick brown fox jumps over the lazy dog" -> True
string1 = 'The quick brown fox jumps over the lazy dog'

def pangram(string1):
    string1 = string1.lower()
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for index in range(0, len(string1)):
        for alpha in letters:
            if string1[index] == alpha:
                letters.remove(alpha)
        if len(letters) == 0:
            return("This is a pangram")
    return("Not a pangram")

print(pangram(string1))