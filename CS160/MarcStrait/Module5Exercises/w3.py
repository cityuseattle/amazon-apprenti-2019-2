def first_last(str):
  if len(str) < 2:
    return ''
  return str[0:2] + str[-2:]

print(first_last('w3resource'))
print(first_last('w3'))
print(first_last('w'))