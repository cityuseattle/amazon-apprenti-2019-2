import os

def delete_directory(ans):
    if ans.lower() == 'y' or ans.lower() == 'yes':
        prev = os.chdir('..')
        for i in range(4, 11):
            try:
                if len(os.listdir('Module{}'.format(i))) == 0:
                    os.rmdir('Module{}'.format(i))
                else:
                    print('Module{} is not empty, cannot be deleted'.format(i))
            except FileExistsError:
                continue
        print("DONE")
    else:
        print("Maybe next time:)")

if __name__ == "__main__":
    answer = input("Do you want to create Module 4-10 directories? (y/n): ")
    delete_directory(answer)