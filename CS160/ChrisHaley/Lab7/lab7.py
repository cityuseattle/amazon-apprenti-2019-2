print()
#1
a = [1, 4, 9, 16, 25, 49, 64, 81, 100]
lista = [even for even in a if even % 2 ==0]
print(lista, "\n")

#2
sentence = "the quick brown fox jumps over the lazy dog"
list2 = [len(word) for word in sentence.split() if word != 'the']
print(list2, "\n")

#3
import re
regex = re.compile(r'[aeiou]')
[print(x, end='') for x in regex.split(sentence)]
print("\n")

#4
fruits = ['apple', 'mango', 'banana', 'cherry']
fruitsDict = {key:len(key) for key in fruits}
print(fruitsDict, "\n")

#5
country = ['USA', 'England', 'France', 'China', 'Thailand']
capital = ['DC', 'London', 'Paris', 'Beijing', 'Bangkok']
dict5 = {country[i]:capital[i] for i in range(len(country))}
print(dict5, "\n")

#6
mat = [[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]]
list6 = [j for x in mat for j in x]
print(list6, "\n")

#7
color_dict = {'red':5, 'green':8, 'black':2, 'white':17, 'blue':20, 'brown':1, 'yellow':10}
target =10
print({key:value for key,value in color_dict.items() if value == target})
print('\n')

#8
sentence = 'Use a dictionary comprehension to count the length of each word in a sentence'
print([len(word) for word in sentence.split()], '\n')

#9
sentences = ["The Hubble Space telescope has spotted",
"a formation of galaxies that resembles", 
"a smiling face in the sky", 
"The image taken with the Wide Field Camera",
"Shows a patch of space filled with galaxies",
"of all shapes, colors and sizes"]

stopwords = ['for', 'a', 'of', 'the', 'and', 'to', 'in', 'on', 'with']

#To get rid of "The" as well as "the" change stopwords.count(i) to stopwords.count(i.lower())
# list9 = [i for x in sentences for i in x.split() if stopwords.count(i) == 0]
# list9 = [i for x in sentences for i in x.split() if i.lower() not in stopwords]
list9 = [[word for word in sentence.split() if word.lower() not in stopwords] for sentence in sentences]
for w in list9:
    print(w)
# print(list9, "\n")
