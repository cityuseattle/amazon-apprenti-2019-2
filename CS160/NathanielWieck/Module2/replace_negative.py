def replace_negative(listNum):
    for i in range(len(listNum)):
        if listNum[i] < 0:
            listNum[i] = abs(listNum[i])
    return listNum