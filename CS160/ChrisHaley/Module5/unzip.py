import zipfile
import os

file = zipfile.ZipFile('Archive.zip')
print(file.namelist())

# show info of test0.py as example
sampleInfo = file.getinfo('test0.py')
print(sampleInfo)
print(sampleInfo.file_size)
print(sampleInfo.compress_size)

# extracting from zip
file.extractall()
file.close()
