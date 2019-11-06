import zipfile

newZip = zipfile.ZipFile('Archive.zip', 'w')
newZip.write('test0.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.close()

newZip = zipfile.ZipFile('Archive.zip', 'a')
newZip.write('test3.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.close()

newZip = zipfile.ZipFile('Archive.zip', 'a')
newZip.write('test4.py', compress_type=zipfile.ZIP_DEFLATED)
newZip.close()