import random 

lottoTickets = []

for i in range(100):
    lottoTickets.append(random.randrange(1000000000,9999999999))

isValid = True
lottoTickets.sort()
for i in range(len(lottoTickets)):
    if i < len(lottoTickets) - 1 and lottoTickets[i] == lottoTickets[i+1]:
        print('invalid list')
        valid = False
        break

if isValid == True:
    winner = random.choice(lottoTickets)
    print('Lucky ticket is : ', winner)

else : 
    print("Please try it again.")