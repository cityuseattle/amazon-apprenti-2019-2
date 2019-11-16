import os

def deletedirectory(ans):
    if ans.lower() == 'y' or ans.lower() == 'yes':
        prev = os.chdir('../..')
        print(os.getcwd())
        for i in range(4, 11):
            # if directory exists
            if ('Module{}'.format(i)):
                # if directory has no content
                if len(os.listdir('Module{}'.format(i))) == 0:
                    try:
                        os.rmdir('Module{}'.format(i))
                    except FileExistsError:
                        continue
                # if directory has content
                else:
                    print('Module{} not empty, cannot be deleted.'.format(i))
        print('THERE YOU GO!')
        
        lst = os.listdir(prev)
        lst.sort()
        print(', '.join(lst))
    else:
        print('Maybe next time :)')

if __name__ == "__main__":
    answer = input('Do you want to delete directories for Module 4-10? (y/n): ')
    deletedirectory(answer)