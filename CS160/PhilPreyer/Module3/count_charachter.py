import pprint

message = """Peter Piper picked a peck of pickled peppers
             A peck of pickled peppers Peter Piper picked
             If Peter Piper picked a peck of pickled peppers
             Where's the peck of pickled peppers Peter Piper picked?"""

count = {}
for ch in message:
    count.setdefault(ch, 0)
    count[ch] = count[ch] + 1

pprint.pprint(count)