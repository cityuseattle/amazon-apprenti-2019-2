for i in range(5):
    f = open('test{}.txt'.format(i), 'w')
    f.write('testtesttest')
    f.close()

for i in range(5):
    f = open('test{}.py'.format(i), 'w')
    f.write('"testtesttest"')
    f.close()