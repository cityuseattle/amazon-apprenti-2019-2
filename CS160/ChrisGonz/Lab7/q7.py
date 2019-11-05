colorDict = {'red': 5,
              'green': 8,
              'black': 2,
              'white': 17,
              'blue': 20,
              'brown': 1,
              'yellow': 10
              }

targetScore= 10
findRanger = {k: v for k, v in sorted(colorDict.items()) if v == targetScore} #Sorted for faster compute
print(findRanger)
