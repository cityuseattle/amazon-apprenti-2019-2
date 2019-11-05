#1
def next_item(items):
    item_iter = iter(items)
    while True:
        if input('Would you like to see the next item?(y/n)\n').lower() == 'y':
            try:
                print(next(item_iter))
            except StopIteration:
                print("No more items left!")
                break
        else:
            break

items = [3, 2, 6, 4, 9, 8, 2, 7, 5, 7, 9]
next_item(items)


#2
print('\n#2')
def next_iterator():
    i = 1
    while True:
        yield i * i
        i+=1

for num in next_iterator():
    if num < 100:
        if num % 2 == 0:
            print(num)
    else:
        break

#3 
print('\n#3')
def sum_all(*integers):
    sum = 0
    for i in integers:
        sum += i
    print(sum)

sum_all(1, 2, 3, 4, 5, 6, 7, 8, 9)
sum_all(5, 6, 7, 8, 9)
sum_all()

#4
print('\n#4')
def whatgames(game = 'chess'):
    print('I like playing %s' % game)

whatgames('monopoly')
whatgames('sudoku')
whatgames()
whatgames('fortnite')

#5
print('\n#5')
def info(firstName, lastName, **kwargs):
    print('First Name: ', firstName)
    print('Last Name: ', lastName)
    for key, value in kwargs.items():
        print('Extra info: %s : %s' %(key, value))
    print()

info('John', 'Doe', age = '23')
info('Steven', 'Stamkos', favorite_sport = 'hockey')

#6
print('\n#6')
def describe_person(firstName, lastName, age=None, favorite_language=None):
    print('First Name: %s\nLast Name: %s'%(firstName, lastName))
    if age:
        print("Age: %d" % age)
    if favorite_language:
        print('Favorite Language: %s' % favorite_language)
    print('\n')

describe_person('brian', 'kernighan', favorite_language='C')
describe_person('ken', 'thompson', age=70)
describe_person('adele','goldberg', age=68, favorite_language='Smalltalk')
describe_person('dennis', 'ritchie', favorite_language='C')
describe_person('guido', 'van rossum', favorite_language='Python')
