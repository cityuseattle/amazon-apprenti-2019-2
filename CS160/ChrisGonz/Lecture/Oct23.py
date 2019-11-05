import pdb
import logging



logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s - %(message)s')

logging.debug('Start of program')



def factorial(n):

    logging.debug('Start of factorial(%s)' % (n))

    total = 1

    for i in range(n + 1):

        total *= i

        logging.debug('i is ' + str(i) + ', total is ' + str(total))

    logging.debug('End of factorial(%s)' % (n))

    return total



def main():

    #pdb.set_trace()

    print(factorial(5))



if __name__ == '__main__':

    main()

    logging.debug('End of program')
