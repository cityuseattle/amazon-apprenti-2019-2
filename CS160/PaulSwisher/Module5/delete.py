import shutil
import os

extension = input("What extension of file you want to delete?")
# files under current directory
for filename in os.listdir('./'):
    if filename.endswith(extension):
        # use print() to show what files will be deleted
        #to avoid addicdential deletion
        print(filename)

ans = input("Are you sure? (y/n)")
if ans.lower()=='y':
    for filename in os.listdir('./'):
        if filename.endswith(extension):
            # this will permenantly delete files
            os.unlink(filename)