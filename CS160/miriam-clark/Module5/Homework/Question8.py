#Find all occurrences of "USA" in the given string ignoring the case, expected outcome:
#input str = "Wecome to the USA.  The usa is awesome, isn't it?"
#The USA count is: 2

string1 = "Welcome to the USA.  The usa is awesome, isn't it?"

def findAll(string1):
    count = 0
    string1 = string1.lower()
    for index in range(0, len(string1)):
        if string1[index] == "u":
            if string1[index + 1] == "s":
                if string1[index + 2] == "a":
                    count += 1
    print("The USA count is: "+str(count))        #print(f"The USA count is: {count}"")

print(findAll(string1))
