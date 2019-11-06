str1 = "Welcome to USA. usa is awesome, isn't it?"
str2 = "Welcome to your worst nightmare."
str3 = "usa... Usa... USA! USA! USA!!"

def count(str1):
    count = 0
    str1 = str1.lower()
    for i in range(0, len(str1), 1):
        if str1[i] == 'u':
            if str1[i + 1] == 's':
                if str1[i + 2] == 'a':
                    count += 1
    print(f'The USA count is: {count}')

count(str1)
count(str2)
count(str3)