def next_iterator():
    i = 1

    # # An Infinite loop to generate squares
    while True:
        yield i*i
        i += 1  # Next execution resumes from this point

for num in next_iterator():
    if num < 100:
        if num % 2 == 0:
            print(num)
    else:
        break
