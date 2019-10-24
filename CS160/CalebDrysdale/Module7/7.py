color_dict = {'red': 5,
              'green': 8,
              'black': 2,
              'white': 17,
              'blue': 20,
              'brown': 1,
              'yellow': 10
              }

target = 10
find = {k: v for k, v in sorted(color_dict.items()) if v == target}
print(find)