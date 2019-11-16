str1 = "This sentence is not a panagram!"
str2 = "The quick brown fox jumps over the lazy dog."
str3 = "The five boxing wizards jump quickly."
str4 = "B, C, F, G, H, I, J, K, M, O, P, Q, U, V, W, X, Y, and Z are letters."
str5 = "Nope."

def panagram(str1):
    str1 = str1.lower()
    alphaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for i in range(0, len(str1), 1):
        for j in alphaList:
            if str1[i] == j:
                alphaList.remove(j)
        if len(alphaList) == 0:
            return("Yes it is a panagram!")
    return("No it is not a panagram...")

print(str(panagram(str1)))
print(str(panagram(str2)))
print(str(panagram(str3)))
print(str(panagram(str4)))
print(str(panagram(str5)))