countries = ['USA', 'England', 'France', 'China', 'Thailand']
capitals = ['DC', 'London', 'Paris', 'Beijing', 'Bangkok']

capitalsdict = {countries[i]: capitals[i] for i in range(len(countries))}
print(capitalsdict)