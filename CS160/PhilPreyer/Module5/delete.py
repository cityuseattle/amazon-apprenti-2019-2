import shutil
import os

extension = input("What file extension do you want to delete?")
# Files in current directory
for filename in os.listdir('./'):
    if filename.endswith(extension):
        # use print()
        # or not
        print(filename)

ans = input("Are you sure? (y/n)")
if ans.lower() == 'y':
    for filename in os.listdir('./'):
        if filename.endswith(extension):
            # This will delete the files
            os.unlink(filename)