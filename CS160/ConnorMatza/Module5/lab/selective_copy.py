import shutil
import os

def copy(extension, append="", source='./', target='./backup'):
    for file in os.listdir(source):
        ## Not sure if this will work, I want support for custom appends to the moved filename.
        ## Idea here is to add target to /newfilename
        ## If append isn't selected we can just use default and shutil will just handle it.
        if file.endswith(extension):
            if append != "":
                innertarget = target + file.split('.')[0] + append + '.' + file.split('.')[1]
            else:
                innertarget = target
            shutil.copy(source + file, innertarget)
args = []


ext = input("Please select your target extension\n>>>")
if ext == "":
    raise Exception("You have selected zero files, this is a copy program")
else:
    args.append(ext)
append = input("Would you like to append to the filename? If so, what annotation would you like \n>>>")
if append == "":
    args.append("")
else:
    args.append(append)
sourcedir = input("Please select your source directory (default ./)\n>>>")

if sourcedir == "":
    args.append('./')
else:
    args.append(sourcedir)
destdir = input("Please select your destination directory (default ./backup) \n>>>")
if destdir == "":
    args.append('./backup/')
else:
    args.append(destdir)

copy(*args)