import os


def makedirectory(ans):
    if ans.lower() == 'y' or ans.lower() == 'yes':
        prev = os.chdir('..')
        for i in range(4,11):
            # if directory exists, skip to make a new one
            try:
                os.rmdir('Module{}'.format(i))
            except FileExistsError:
                continue
            print("THER YOU GO!")
            lst = os.listdir(prev)
            lst.sort()
            print(','.join(lst))
        else:
                print("Maybe Next Time :B")


if __name__ == "__main__":
    answer = input("Do you want to create Module 4-10 diretories? (y/n)")
    makedirectory(answer)