def next_one(items):
    item_iter = iter(items)
    while True:
        ans = input('Want to see next? [y/n]: ')
        if ans == 'y':
            try:
                print(next(item_iter))
            except StopIteration:
                print("That's all")
                break
        elif ans == 'n':
            break

items = [3, 2, 6, 4, 9, 8, 2, 7, 5, 7, 9]
next_one(items)