import zipfile
import os

file = zipfile.ZipFile('Archive.zip')
print(file.namelist())

# show info test0.py as example
sampleInfo = file.getinfo('test4.py')
print(sampleInfo)
print(sampleInfo.file_size)
print(sampleInfo.compress_size)

# extracting from ZIOP
file.extractall()
file.close()