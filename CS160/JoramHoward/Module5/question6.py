str1 = 'w3resource'
str2 = 'w3'
str3 = 'w'

def knife(strIn):
    strOut = ''
    if len(strIn) < 2:
        return(strOut)
    else:
        strOut += strIn[0:2]
        strOut += strIn[-2]
        strOut += strIn[-1]
        return(strOut)

print(str(knife(str1)))
print(str(knife(str2)))
print(str(knife(str3)))