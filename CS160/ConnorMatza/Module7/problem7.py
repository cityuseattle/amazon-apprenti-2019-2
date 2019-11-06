powerrangers = {'red': 5, 'green': 8, 'black': 2, 'white': 17, 'blue': 20, 'brown': 1, 'yellow': 10}
reversemap = { value: key for key, value in powerrangers.items() }
power = reversemap[10]
print(power)