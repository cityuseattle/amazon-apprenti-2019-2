import random

ticketList = []
for ticket in range(1000):
    lottoTicket = ''
    flag = 1
    while flag:
        for position in range(10):
            if position == 0:
                lottoTicket += str(random.randint(1,9))
            else:
                lottoTicket += str(random.randint(0,9))
        for i in range(0, len(ticketList)):
            if lottoTicket == ticketList[i]:
                continue
        ticketList.append(lottoTicket)
        flag = 0

winningTicket = random.randint(1, 1000)
print(f'The winning ticket is {ticketList[winningTicket]}!')