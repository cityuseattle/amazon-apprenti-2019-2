##Question 1

def next_one(items):
    items_iter = iter(items)
    while True:
        new_item = input("Would you like to see the next item? (y/n)")
        if new_item == "y":
            try:
                print(next(items_iter))
            except StopIteration:
                print("You've hit the end of the list")
                break
        elif new_item == 'n':
            print("Goodbye!")
            break
items = [3, 2, 6, 4, 9, 8, 2, 7, 5, 7, 9]
next_one(items)

## Question 2

def next_iterator():
    i = 1

    while True:
        yield i * 2
        i += 1

for num in next_iterator():
    if num < 100:
        if num % 2 == 0:
            print(num)
    else:
        break

def sum_all(*args):
    return sum(*args)
print(sum_all(items))

def whatgames(game = "Chess"):
    print("I like playing " + game + "!")
whatgames("sudoku")
whatgames("super smash bros")
whatgames("checkers")
whatgames("monopoly")

def info(f, l, **kwargs):
    print(f)
    print(l)
    for key, value in kwargs.items():
        print(key, value)
info("Connor", "Matza", code="Machine")

def describe_person(f, l, favorite_language=None, favorite_videogame=None):
    print(f)
    print(l)
    if favorite_language:
        print("They like to code in %s" % favorite_language)
    if favorite_videogame:
        print("They like to play %s" % favorite_videogame)

describe_person("Connor", "Matza", favorite_language="C", favorite_videogame="Cyberpunk 2077")
