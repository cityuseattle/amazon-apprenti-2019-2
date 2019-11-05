#10. Sort the dictionary from #9 by value and print its associated key (Hint: the material needed to do this has been covered, but it's not entirely obvious)


d = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3}

sorted(d.values())

for key in sorted(d.keys()) :
    print(key)