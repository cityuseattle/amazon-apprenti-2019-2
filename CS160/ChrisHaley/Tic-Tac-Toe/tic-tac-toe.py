### FUNCTIONS ###

# Display the current board to the screen
# INPUT: the current board configuration
def displayBoard(b):
    print('     |     |')
    print('  ' + b[0] + '  |  ' + b[1] + '  |  ' + b[2])
    print('     |     |')
    print('-----------------')
    print('     |     |')
    print('  ' + b[3] + '  |  ' + b[4] + '  |  ' + b[5])
    print('     |     |')
    print('-----------------')
    print('     |     |')
    print('  ' + b[6] + '  |  ' + b[7] + '  |  ' + b[8])
    print('     |     |')

# Check for a winning condition; 8 total possibilities: horizontally (3), vertically (3), and diagonally (2)
# INPUT: current board configuration and player move
# OUTPUT: TRUE or FALSE for if a winning condition exists
def checkWin(b, m):
    return ((b[0] == m and b[1] == m and b[2] == m) or  # H top
            (b[3] == m and b[4] == m and b[5] == m) or  # H mid
            (b[6] == m and b[7] == m and b[8] == m) or  # H bot
            (b[0] == m and b[3] == m and b[6] == m) or  # V left
            (b[1] == m and b[4] == m and b[7] == m) or  # V center
            (b[2] == m and b[5] == m and b[8] == m) or  # V right
            (b[0] == m and b[4] == m and b[8] == m) or  # LR diag
            (b[2] == m and b[4] == m and b[6] == m))  # RL diag

# Check for a draw
# INPUT: current board configuration
# OUTPUT: TRUE or FALSE if there is a tie
def checkDraw(b):
    return ' ' not in b

# Makes copy of the current board configuraiton for testing purposes
# INPUT: current board configuration
# OUTPUT: duplicate board containing current configuration
def getBoardCopy(b):
    dupeBoard = []
    for j in b:
        dupeBoard.append(j)
    return dupeBoard

# Test for a move that can win now
# INPUT: b = current board, mark = player marker (0 or X), i = board position to check for a win
def testWinMove(b, mark, i):
    bCopy = getBoardCopy(b)
    bCopy[i] = mark
    return checkWin(bCopy, mark)

# Test for a move that can create two possible winning moves next turn
# INPUT: b = current board, mark = player marker (0 or X), i = board position to check for a win
def testForkMove(b, mark, i):
    bCopy = getBoardCopy(b)
    bCopy[i] = mark
    winningMoves = 0
    for j in range(0, 9):
        if testWinMove(bCopy, mark, j) and bCopy[j] == ' ':
            winningMoves += 1
    return winningMoves >= 2

# Computer AI
    # Determine the best computer move and return that move
    # INPUT: the current board
    # OUTPUT: the computer's move
        # Should prioritize the following and in order:
            # 1. Make the winning move
            # 2. Block a player from winning
            # 3. Make a move that causes a fork (move that creates 2 winning plays where the player can't block both)
            # 4. Block a player from making a fork move
            # 5. prioritize the center move if available
            # 6. Make a corner play
            # 7. Play the side
def getComputerMove(b):
    # Check computer win moves
    for i in range(0, 9):
        if b[i] == ' ' and testWinMove(b, 'X', i):
            return i
    # Check player win moves
    for i in range(0, 9):
        if b[i] == ' ' and testWinMove(b, '0', i):
            return i
    # Check computer fork opportunities
    for i in range(0, 9):
        if b[i] == ' ' and testForkMove(b, 'X', i):
            return i
    # Check player fork opportunities, incl. two forks
    playerForks = 0
    for i in range(0, 9):
        if b[i] == ' ' and testForkMove(b, '0', i):
            playerForks += 1
            tempMove = i
    if playerForks == 1:
        return tempMove
    elif playerForks == 2:
        for j in [1, 3, 5, 7]:
            if b[j] == ' ':
                return j
    # Play center
    if b[4] == ' ':
        return 4
    # Play a corner
    for i in [0, 2, 6, 8]:
        if b[i] == ' ':
            return i
    #Play a side
    for i in [1, 3, 5, 7]:
        if b[i] == ' ':
            return i

# Figure out if the user wants a PVP or PvComputer game and return the valid option
# INPUT: current_player variable to keep track of whose turn it is
# OUTPUT: option (type of game) and player that goes first
def gameOptions(firstPlayer):
    option = ''
    while option != '1' and option != '2':
        option = input("What type of game would you like to play?\n1: Player vs Computer\n2: Player vs Player\n")

    #Get a valid option for going first or second   
    print("Player 1 will be '0' and Player 2 will be 'X'\nIn Player vs Computer games, the computer will be Player 2")
    while firstPlayer != 1 and firstPlayer != 2:
        if option != '2':
            choice = input('Would Player 1 like to go first or second? (1/2)\n')
        else:
            choice = input('Would Player 1 like to go first or second? (1/2) The computer is Player 2\n')

        if choice == '1':
            firstPlayer = 1
        elif choice == '2':
            firstPlayer = 2
        else:
            print('Invalid input, enter a 1 or 2')
    
    return int(option), firstPlayer

#Obtain a player's move
#INPUT: current player
#OUTPUT: current player's move choice
def playerMove(currentPlayer):
    move = ''
    while not str(move).isdigit() or len(str(move)) != 1 or move == 0:
        try:
            move = int(input('Player {} go: (1-9)'.format(currentPlayer)))
        except ValueError:
            continue
    return move - 1


### MAIN ###
Playing = True
while Playing:
    # Player 1 will alwasy be 0 and player 2 will always be X
    player_markers = ['0', 'X']

    #current_player will keep track of whose turn it is
    current_player = 0

    #get the game type (pvc or pvp) and if player 1 will go first or 2nd
        #gameType == 1: PvC; gameType == 2: PvP
    gameType, current_player = gameOptions(current_player)

    #initialize board and display it
    board = [' '] * 9
    displayBoard(board)

    # Start Playing
    InGame = True
    while InGame:
        # If player 1's turn or player 2's turn in a pvp game, get player move and validate it
        if current_player == 1 or gameType == 2:
            move = playerMove(current_player)
            if board[move] != ' ':
                print('Invalid move!')
                continue
        # otherwise, get the computer's move
        else:
            move = getComputerMove(board)
        #then set the move on the actual board
        board[move] = player_markers[current_player-1]

        #check to see if a winning condition exists
        if checkWin(board, player_markers[current_player-1]):
            InGame = False
            displayBoard(board)
            if current_player == 1:
                print("0's won! You're the smartest person alive!")
            else:
                print("X's won! You suck!")
            continue

        # If not no winning condition, check for a draw condition (no moves left to make)
        if checkDraw(board):
            InGame = False
            displayBoard(board)
            print("It's a draw!")
            continue
        displayBoard(board)

        # If no win or draw, change the current player and continue the game
        if current_player == 1:
            current_player += 1
        else:
            current_player -= 1

    print('Type y to keep playing')
    inp = input()
    if inp != 'y' and inp != 'Y':
        Playing = False