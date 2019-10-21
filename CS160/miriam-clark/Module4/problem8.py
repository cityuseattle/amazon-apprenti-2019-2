#8. Write a program that reverses the order of the output from #7
mydict = {1 : 1**1, 
2 : 2**2,
3 : 3**3,
4 : 4**4,
5 : 5**5}

backwords = sorted(mydict.items(), reverse = True)

print(backwords)