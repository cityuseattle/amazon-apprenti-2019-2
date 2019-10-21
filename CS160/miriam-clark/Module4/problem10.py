#10. Sort the dictionary from #9 by value and print its associated key 
#(Hint: the material needed to do this has been covered, but it's not entirely obvious)
daydict = {
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
    7 : "Sunday"}

backwards = sorted(daydict.items(), reverse = True)
print(backwards)