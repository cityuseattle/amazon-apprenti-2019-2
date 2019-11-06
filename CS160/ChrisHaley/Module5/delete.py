import shutil
import os

extension = input("What extension of file do you want to delete?")
# files for current directory
for filename in os.listdir('./'):
    if filename.endswith(extension):
        # use print() to show what files will be deleted
        # to avoid accidental deletion
        print(filename)

ans = input("Are you sure? (y/n) ")
if ans.lower()=='y':
    for filename in os.listdir('./'):
        if filename.endswith(extension):
            # this will permanently delete files
            os.unlink(filename)