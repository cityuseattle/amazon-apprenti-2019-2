import pprint
message = """Peter Piper pickle peeppers
                A peck of pickeled ..
                where's the peck of 
                ..........?"""
count ={}
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)