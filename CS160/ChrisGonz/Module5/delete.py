import shutil 
import os 

extension = input ("What extension of file you want to delete?")

for filename in os.listdir('./'):
    if filename.endswith(extension):
        print(filename)

ans = input("Are you sure? (y/n) ")
if ans.lower() == 'y':
    for filename in os.listdir('./'):
        if filename.endswith(extension):
            os.unlink(filename)
