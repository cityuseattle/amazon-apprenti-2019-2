listp = [4, 3, 7]
mylist = [7,7,7,]
dudelist = [9,9,9,]



def maxed(x):
    mx = 0
    for i in range(len(x)):
        if x[i] > mx:
            mx = x[i]
    return mx

print(maxed(listp))