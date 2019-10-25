txt = open("py.txt", "w")
txt.write("Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.")
txt.close()
txt = open("py.txt", "r")
def longest(filePy):
    count = txt.read().split()
    maxLen = len(max(count, key=len))
    for word in count:
        if len(word) == maxLen:
            return word
print(longest("py.txt"))
txt.close()