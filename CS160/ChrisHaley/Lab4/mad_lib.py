file = open('mad_lib.txt', 'r')
content = file.read()
file.close()

adj = input("Input an adjective ")
noun = input("Enter in a noun ")
verb = input("Enter in a verb ")
noun2 = input("Enter in another noun ")

content = content.replace("ADJECTIVE", adj)
content = content.replace("NOUN", noun, 1)
content = content.replace("VERB", verb)
content = content.replace("NOUN", noun2)

print(content)
