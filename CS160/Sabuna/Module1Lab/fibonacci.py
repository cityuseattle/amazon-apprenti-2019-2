
def fibnum(n):
    x=0
    y=1
    if n ==1:
        return 0
    elif n==2:
        return 1
    elif n<1:
        print('It is the wrong number')
        return 0
    for i in range(n-2):
        z=x+y
        x=y
        y=z
    return z


print(fibnum(int(input('please insert the Fibonannci position you want to see?'))))



  