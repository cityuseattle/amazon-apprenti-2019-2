import re

madlib = input("Enter a mad lib file\n>>>")

madlibfile = open(madlib)
content = madlibfile.read()

adjective = input("Enter an adjective\n>>>")
content = content.replace("ADJECTIVE", adjective)
adverb = input("Enter an adverb\n>>>")
content = content.replace("ADVERB", adverb)
noun = input("Enter a noun\n>>>")
content = content.replace("NOUN", noun)
verb = input("Enter a verb\n>>>")
content = content.replace("VERB", verb)
print(content)