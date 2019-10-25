def list1(l):
  x = []
  for a in l:
    if a not in x:
      x.append(a)
  return x

print(list1([1,2,3,3,3,3,4,5]))