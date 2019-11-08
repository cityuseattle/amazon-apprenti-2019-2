import os

def makedirectory(ans):
    if ans.lower() == 'y' or ans.lower() == 'yes':
        prev = os.chdir('..')
        for i in range(4, 11):
            # if a directory already exists, skip to make the next one
            try:
                os.mkdir('Module{}'.format(i))
            except FileExistsError:
                continue
        print("THERE YOU GO!")
        lst = os.listdir(prev)
        lst.sort()
    else:
        print("Maybe next time :)")

if __name__ == "__main__":
    answer = input("Do you want to create a Module 4-10 directories? (y/n): ")
    makedirectory(answer)