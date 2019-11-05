list1 = [1, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 5,]
list2 = [34, 12, 65, 12, 12, 12, 21, 12, 12, 72]


def unique(s):
  a = []
  for i in s:
    if i not in a:
      a.append(i)
  return a 


print(unique(list1))