List1 = [1,4,9,16,25,36,49,64,81,100]
List2 = []

for i in List1: 
    if i % 2 == 0:
        List2.append(i)

print(List2)


List2 = [ i for i in List1 if i % 2 == 0] 