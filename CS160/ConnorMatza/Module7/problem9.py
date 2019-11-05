sentences = ["The Hubble Space telescope has spotted", 
             "a formation of galaxies that resembles", 
             "a smiling face in the sky", 
             "The image taken with the Wide Field Camera", 
             "shows a patch of space filled with galaxies", 
             "of all shapes, colours and sizes"]

stopwords = ['for', 'a', 'of', 'the', 'and', 'to', 'in', 'on', 'with']

removed = [[word.lower() for word in sentence.split() if word.lower() not in stopwords] for sentence in sentences]
print(removed)