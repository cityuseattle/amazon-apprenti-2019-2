import os 
import shutil

folder  = input('Enter the filepath of the directory you wish to copy from: ')

extension = ("Enter the extension you'd like to copy: ")

destination = input("Enter destination folder's absolute filepath: ")

for folders,  subfolders, filenames in os.walk(folder): 
    for filename in filenames :
        if filename.endswith('{}'.format(extension)):
            shutil.copy(os.path.join(folders, filename), destination)

print('Selective copying is done. ')