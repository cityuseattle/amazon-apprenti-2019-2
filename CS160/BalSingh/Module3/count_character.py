import pprint

message = """Peter piper picked a pack of pickeld peppers
            A peck of peckled peppers Perter piper picked
            If Peter Piper picked a peck of pickled peppers
            Where's the peck of pickled peppers peter piper picked?"""
count = {}

for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)