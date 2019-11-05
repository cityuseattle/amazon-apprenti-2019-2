import pprint

message = """Peter Piper picked a peck of pickled peppers
            A peck of pickled peppers Piper picked
            If Peter Piper picked a peck of pickled peppers
            Where's the peck of pickled peppers Peter Piped picked?"""

count = {}
for charecter in message:
    count.setdefault(charecter, 0)
    count[charecter] = count[charecter] + 1

pprint.pprint(count)