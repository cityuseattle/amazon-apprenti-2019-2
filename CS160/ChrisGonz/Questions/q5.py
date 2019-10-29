def pangram(userPhrase):
    ignoreCase = userPhrase.lower()
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for char in alphabet:
        if char not in ignoreCase:
            return False
        
    return True

phrase = "The quick brown fox jumps over the lazy dog"
print(pangram(phrase))
