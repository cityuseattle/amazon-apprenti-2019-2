def unique_list(l):
  x = []
  for i in l:
    if i not in x:
      x.append(i)
  return x

print(unique_list([1,2,3,3,3,3,4,5]))