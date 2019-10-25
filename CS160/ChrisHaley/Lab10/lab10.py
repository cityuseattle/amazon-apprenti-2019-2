#1.First, get the set of numbers separated by comma. Then generate a list and a tuple with those numbers. (2 points)
# example:
# input (by user) = 1,4,2,3
# output List = ['1', '4', '2', '3']
#        Tuple= ('1', '4', '2', '3')

print('#1')
list1 = input("Enter a set of numbers, separated by a comma\n").split(',')
tuple1 = tuple(list1)
print(type(list1), ': {}'.format(list1))
print(type(tuple1), ': {}'.format(tuple1))


#2.Write a Python program to get a list, sorted in increasing order by the last element in each tuple from a given list of non-empty tuples. You can assume that each tuple has 2 elements. (5 points)
# example:
# input = [(2,3), (3,2), (2,1), (4,4)]
# output [(2,1), (3,2), (2,3), (4,4)]

print('\n#2')
input2 = [(2,3), (3,2), (2,1), (4,4)]
print('Original: ', input2)
print('Sorted: ', sorted(input2, key=lambda x: (x[1])))

#3.Your Python program will count the number of strings that have the same first character and the last character as shown below.
# example:
# input = ['abc', 'xyz', 'aba', '2542']
# output = 2 (since ‘aba’, ‘2542’ have met the criteria) (5 points)

print('\n#3')
input3 = ['abc', 'xyz', 'aba', '2542']
output3 = [x for x in input3 if x[0]==x[-1]]
print('Orignal input: ', input3)
print('There are {} strings that met the criteria: {}'.format(len(output3), output3))

#4.Get the three integer numbers from a user. Write a program to find the median of three numbers (5 points)
# example:
# input = 2, 9, 3
# output = 3

print('\n#4')
input4 = input("Enter 3 numbers separated by a comma\n").split(',')
output4 = [int(x) for x in input4]
output4.sort()
print('The median of: {} is {}'.format(input4, output4[1]))

#5.Write a Python program to find unique triplets whose three elements would result in the sum of zero from a set of n integers. (8 points)
# example:
# input = 1 -6, 4, 2, -2, 2, 0, -2, 0
#         |-----| ==> sum = -1  ‘not correct’
#            |-----| ==> sum = 0 'correct triplet!'
#               |-------| ==> sum = 4 ‘not correct’
#                         |-----| ==> sum = 0 'correct triplet!'

print('\n#5')
input5 = 1, -6, 4, 2, -2, 0, -2, 0
for x in range(len(input5) - 2):
    sum = input5[x] + input5[x+1] + input5[x+2] 
    if sum == 0:
        msg = "'correct triplet!'"
    else:
        msg = "'not correct'"
    print('Round {}: sum = {} {}'.format(x+1, sum, msg))


#6. Extra point (5 points)
# - Which part of the Python lectures you enjoyed the most and why?
    ## I really enjoyed the "hands on" parts; that is where I learn the most and practicing for myself helps solidify the understanding

# - Which part of the Python lectures you would like to see change and why?
    ## I honestly wouldn't really change anything from the lectures; they were great and incorporated the hands-on which was extremely beneficial
    ## If I had to choose something to change, I would say it might be good to incorporate more 'use cases' for some of the things we went over

# - Finally, I have tried 3 different lecture styles, (1) 100%-coding demo (2) 100%-slide demo (3) 50%-coding/50%-slide demo.
# Which style do you prefer and why?
    ## This is a really hard question becuase for me it depends on the material.  For instance, when talking about object oriented programming
    ## having the 50/50 was super helpful; not only could we see the info on the slide and from the brief, but we practiced it through code
    ## Again, if I had to choose 1, I would say the 50/50 approach is a great middle-ground. When coding strings, tuples, lists, etc I feel like
    ## it is way more beneficial to be on the keyboard and practicing. However, concepts are important, and without slides, its hard to really
    ## capture all the great points about the concepts without the slides/visualization. It is also important to "code" and practice the concepts though too
