try:
    f = open('test.txt', 'r')
    contents = f.read()
    print(contents)
finally:
    f.close()

try:
    f = open('test.txt', 'w')
    print('what do you want to say')
    str = input()
    f.write(str)
finally:
    f.close()

try:
    f = open('test.txt', 'a')
    print('what do you want to say')
    str = input()
    f.write(str)
finally:
    f.close()