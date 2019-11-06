def function1():
    print('Can I skip this task? ')
    function2()


def function2():
    raise Exception('It is not a good idea to skip tasks')


function1()