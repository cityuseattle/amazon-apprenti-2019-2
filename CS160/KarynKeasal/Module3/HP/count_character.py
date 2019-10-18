import pprint

message = """Peter Piper picked a peck of pickled peppers
            A peck of pickled peppers Peter Piper picked
            If Peter Piper picked a peck of pickled peppers
            Where's the peck of pickled peppers Peter Piper picked?"""

count = {}
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)