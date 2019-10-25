def file_read(fname):
    txt = open(fname)
    print(txt.read())
    txt.close()

file_read('color.txt')