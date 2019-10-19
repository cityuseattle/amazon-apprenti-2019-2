import shutil
import os

shutil.copy('test0.txt', './Module5_Backup')
shutil.copy('test0.py', './Module5_Backup')
#copy test0.py to destination with new name
shutil.copy('test0.py', './Module5_Backup/test0_newName.txt')

shutil.copy('test0.txt', './Module5_Backup')
shutil.copy('test0.py', './Module5_Backup')
# move test2.py and change to new name
shutil.copy('test0.py', './Module5_Backup/test2_newName.py')
