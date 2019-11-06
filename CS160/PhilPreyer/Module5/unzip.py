import zipfile
import os

file = zipfile.ZipFile('Archive.zip')
print(file.namelist())

# Show file info
sampleInfo = file.getinfo('test0.py')
print(sampleInfo)
print(sampleInfo.file_size)
print(sampleInfo.compress_size)

# extracting from ZIP
file.extractall()
file.close 