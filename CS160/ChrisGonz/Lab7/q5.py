def ex(keys, values):
    return {keys[i]: values[i] for i in range(len(keys))}

countryLIst = ['USA', 'England', 'France', 'China', 'Thailand']

capital = ['DC', 'London', 'Paris', 'Beijing', 'Bangkok']

print(ex(countryLIst, capital))
