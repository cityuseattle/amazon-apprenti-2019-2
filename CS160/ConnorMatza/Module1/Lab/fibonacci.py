def fib(n):
    if n <= 2:
        arr = [0,1]
        return arr[0:n]
    res = fib(n - 1)
    res.append(res[len(res) -1] + res[len(res) - 2])
    return res
nums = input("Give me an integer for how many fibonacci numbers you want\n")

fibs = fib(int(nums))
print(fibs)
