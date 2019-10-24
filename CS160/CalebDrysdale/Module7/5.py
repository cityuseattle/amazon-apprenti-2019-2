country = ['USA', 'England', 'France', 'China', 'Thailand']
capital = ['DC', 'London' , 'Paris', 'Beijing', 'Bangkok']

def merge(key, value):
 return{key[i]: value[i] for i in range(len(key))} 

print(merge(country,capital))