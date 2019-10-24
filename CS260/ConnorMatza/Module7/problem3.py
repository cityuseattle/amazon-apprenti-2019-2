s = "the quick brown fox jumps over the lazy dog"

v = [x for x in s if x not in ["a", "e", "i", "o", "u", "y"]]
print(v)