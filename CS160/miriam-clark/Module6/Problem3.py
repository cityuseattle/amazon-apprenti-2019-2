#3.	Open a file for writing, and the following texts to a file (say ‘Py.txt’) then
#  close the file. Now, read the file again and find the longest word from the file.
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