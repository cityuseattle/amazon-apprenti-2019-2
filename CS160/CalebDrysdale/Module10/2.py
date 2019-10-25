#2.Write a Python program to get a list, sorted in increasing order by the last element in each tuple from a given list of non-empty tuples. You can assume that each tuple has 2 elements. (5 points)

def last(n): return n[-1]

def sort_list_last(tuples):
  return sorted(tuples, key=last)

print(sort_list_last([(7, 4), (7, 7), (8, 2), (8, 3), (1, 1)]))