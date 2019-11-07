#2.	Write a function that reads the entire text file (Color.txt) from the question 1.
#  Then prints out each color name.
def file_read(fname):
    txt = open(fname)
    print(txt.read())
    txt.close()

file_read('color.txt')