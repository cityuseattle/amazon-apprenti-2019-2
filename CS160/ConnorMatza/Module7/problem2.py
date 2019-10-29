s = "the quick brown fox jumps over the lazy dog"

x = [len(x) for x in s.split() if x != "the"]
print(x)