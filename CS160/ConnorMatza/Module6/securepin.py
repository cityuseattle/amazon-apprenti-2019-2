import random


def securePinGen(n):
    out = []
    for i in range(0, n):
        if i == 1:
            out.append(str(random.randint(1,9)))
        else:
            out.append(str(random.randint(0,9)))
    return "".join(out)

print(securePinGen(4))