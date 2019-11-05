def square(a):
    return a*a

#lambda arguments : expression
print((lambda a:a*a)(3))

g = lambda a:(a%2 == 0)
print(g(11))

h = lambda a, b: a + b
print(h(1,2))

f = (lambda a:a*a)
f(43)

x = 3
result = square(x)
print(result)