import shutil
import os

shutil.copy('test0.txt', './Module5_Backup')
shutil.copy('test0.py', './Module5_Backup')

shutil.copy('test0.py', './Module5_Backup/test0_newName')
shutil.move('test1.txt', './Module5_Backup')
shutil.move('test1.py', './Module5_Backup')

shutil.move('test2.py', './Module5_Backup/test2_newName')


