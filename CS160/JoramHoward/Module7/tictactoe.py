# Tic-tac-toe game, player vs computer. Player can choose easy, hard, or impossible play modes.
# Keeps track of wins, losses, and games played, and asks if user wants to continue playing or quit after each game.

# Basic overall program design and implementation concepts were very important prior to starting to code, and still changed over time.
#   Important conepts included:
#       1) Tracking board state with a dictionary with keys as board squares and values as -1 (player), 0 (open), and 1 (computer).
#       2) How to design overall game loops in the playGame function. Eventually became obvious board state would have to be passed
#               through entire game and all other functions as input parameter and output return for game to function as we designed it.
#       3) How to track effectively track play mode, player turn throughout entire program and game state.
#               Carefully defining, updating, and passing nextTurn value is important. This was a challenging problem to solve because
#               so many different functions are called that require different parameters be passed to behave as desired.
#               For example the endGame function requires 3 parameters are passed so will behave correctly.
#       4) Computer decision making process (required most strategic problem solving, and is majority of game code).
#               There is probably a more effective way to implement the computer decision making process by identifying underlying patterns,
#               but it works, and we evaluated all the potential outcomes and strategies on our own without looking up any strategies
#               and/or code online.

# The two most important variables in the program are probably "nextTurn" and "board". They are passed through many functions.
#   "nextTurn" variable is an integer value (-2 is player wins, -1 is computer wins, 0 is draw, 1 is computers turn, 2 is players turn).
#   "board" variable is a dictionary: keys 1-9 represent board squares, and corresponding value -1 for player owns square,
#   0 for square available, and 1 for computer owns square.

# Sample of overall function call flow is:
#   main()
#       -> playGame()
#           -> coinToss()
#               -> drawBoard(board)
#                   -> compTurn(board, keepPlaying)
#                       -> decisionHard(board, mode)
#                           -> drawBoard(board)
#                               -> endGame(board, player, mode)

import random
import time

# Call playGame()
def main():
    playGame()

# playGame() has two primary while loops: first the keepPlaying loop, and second the nextTurn loop. First it asks user for game mode.
# keepPlaying loop first calls coinToss(), creates first board dictionary required to run all functions and entire game, calls drawBoard()
# keepPlaying loop primarily keeps track of game mode (easy, hard, impossible, quit), game running totals, and contains nextTurn loop.
# nextTurn loop keeps track of game to determine if win, loss, draw or continue, tracks and controls turns by calling playerTurn or compTurn.
def playGame():
    gameTitle()
    gameCount = 0
    compWin = 0
    playerWin = 0
    hardMode = False
    while True:
        time.sleep(.5)
        choice = input('Do you want to play easy mode, or hard mode (enter 1, 2, or 3):\n1: Easy mode\n2: Hard mode\n3: Impossible mode\n')
        try:
            keepPlaying = int(choice)
            if keepPlaying < 1 or keepPlaying > 3:
                print("You have fat fingers - input must be the integer 1, 2, or 3, try again!\n")
                continue
            else:
                break
        except ValueError:
            print("You have fat fingers - input must be the integer 1, 2, or 3, try again!\n")
    firstTimeHard = True
    while keepPlaying != 4:
        if keepPlaying == 2:
            hardMode = True
            if firstTimeHard == True:
                hardInit()
                firstTimeHard = False
            elif firstTimeHard == False:
                print('\nHard mode selected...\n')
                time.sleep(.5)
        elif keepPlaying == 1:
            print('\nEasy mode selected...\n')
            time.sleep(.5)
        elif keepPlaying == 3:
            print('\nImpossible mode selected...\n')
            time.sleep(.5)
        nextTurn = coinToss()
        board = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
        drawBoard(board)
        turnCount = 1
        while nextTurn == 1 or nextTurn == 2:
            print(f'\n\n[[  T U R N  {turnCount}  ]]\n-------------------')
            if nextTurn == 1:
                print('\nHmm analyzing', end=' ', flush=True)
                time.sleep(.5)
                for i in range(3):
                    print('. ', end=' ', flush=True)
                    time.sleep(.5)
                nextTurn = compTurn(board, keepPlaying)
                turnCount += 1
            elif nextTurn == 2:
                nextTurn = playerTurn(board, keepPlaying)
                turnCount += 1

        gameCount += 1
        if nextTurn == -1:
            compWin += 1
            computerWinsGame()
        elif nextTurn == -2:
            playerWin += 1
            playerWinsGame()
        else:
            drawMsg()
        print(f'\nTotal games played: {gameCount}\nTotal computer wins: {compWin}\nTotal player wins: {playerWin}')
        while True:
            time.sleep(.5)
            choice = input('\nPlay again (enter 1, 2, 3, or 4)?\n1: Yes, play again [EASY]\n2: Yes, play again [HARD]\n3: Yes, play again [IMPOSSIBLE]\n4: No, quit\n')
            try:
                keepPlaying = int(choice)
                if keepPlaying < 1 or keepPlaying > 4:
                    print("You have fat fingers - input must be the integer 1, 2, 3, or 4, try again!\n")
                    continue
                else:
                    break
            except ValueError:
                print("You have fat fingers - input must be the integer 1, 2, or 3, try again!\n")

    if compWin > playerWin:
        computerWinsMatch()
        print(f'Computer wins ({compWin} games to {playerWin} games)\n')
        time.sleep(.5)
    elif playerWin > compWin:
        playerWinsMatch()
        print(f'Player wins ({playerWin} games to {compWin} games)\n')
        time.sleep(.5)
    else:
        drawMsg()
        print(f'Draw, {playerWin} games each.\n')
        time.sleep(.5)
    print('Thanks for playing!\n')

# Determines if player or computer goes first
def coinToss():
    print("So you know I am not cheating, flip a coin to decide who goes first, and I'll guess heads or tails!\n")
    time.sleep(.5)
    input("Press Enter to continue...")
    guess = random.randrange(0, 2, 1)
    if guess == 0:
        guess = "HEADS"
    else:
        guess = "TAILS"
    print(f"\nI guessed {guess}!\n\nWho won and will be going first?\n")
    while True:
        time.sleep(.5)
        firstTurn = input("Enter 1 or 2 to start game:\n1: Computer\n2: Player\n\n\n")
        try:
            choice = int(firstTurn)
            if choice < 1 or choice > 2:
                print("You have fat fingers - input must be the integer 1 or 2, try again!\n")
                continue
            else:
                return(choice)
        except ValueError:
            print("You have fat fingers - input must be the integer 1 or 2, try again!\n")

# Draws the graphical version of the current board state for the player to see
def drawBoard(board):
    occupiedList = []
    for i in range(0, 9, 1):
        square = board[i+1]
        if square == -1:
            occupiedList.append('x')
        elif square == 1:
            occupiedList.append('o')
        else:
            occupiedList.append(str(i+1))

    display = [[' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', occupiedList[6], ' ', ' ', '|', ' ', ' ', occupiedList[7], ' ', ' ', '|', ' ', ' ', occupiedList[8], ' ', ' '],
                ['-', '-', '-', '-', '-', '|', '-', '-', '-', '-', '-', '|', '-', '-', '-', '-', '-'],
                [' ', ' ', occupiedList[3], ' ', ' ', '|', ' ', ' ', occupiedList[4], ' ', ' ', '|', ' ', ' ', occupiedList[5], ' ', ' '],
                ['-', '-', '-', '-', '-', '|', '-', '-', '-', '-', '-', '|', '-', '-', '-', '-', '-'],
                [' ', ' ', occupiedList[0], ' ', ' ', '|', ' ', ' ', occupiedList[1], ' ', ' ', '|', ' ', ' ', occupiedList[2], ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ']]
    draw = ''
    for i in range(0, len(display), 1):
        for j in range(0, len(display[0]), 1):
            draw += str(display[i][j])
        draw += '\n'
    print(f'\n\n{draw}')

# Creates a nested list of all possible winning board position patterns - used for computer decision making process
def winSquaresListFunct(board):
    winSquares1 = [1, 4, 7]
    winSquares2 = [2, 5, 8]
    winSquares3 = [3, 6, 9]
    winSquares4 = [7, 8, 9]
    winSquares5 = [4, 5, 6]
    winSquares6 = [1, 2, 3]
    winSquares7 = [7, 5, 3]
    winSquares8 = [1, 5, 9]
    return([winSquares1, winSquares2, winSquares3, winSquares4, winSquares5, winSquares6, winSquares7, winSquares8])

# Creates nested list of mathematical sums of all possible winning board position patterns - used in endGame() function.
def winConListFunct(board):
    winCon1 = board[1] + board[4] + board[7]
    winCon2 = board[2] + board[5] + board[8]
    winCon3 = board[3] + board[6] + board[9]
    winCon4 = board[7] + board[8] + board[9]
    winCon5 = board[4] + board[5] + board[6]
    winCon6 = board[1] + board[2] + board[3]
    winCon7 = board[7] + board[5] + board[3]
    winCon8 = board[1] + board[5] + board[9]
    return([winCon1, winCon2, winCon3, winCon4, winCon5, winCon6, winCon7, winCon8])

# Determines if game continues and which players turn next, or if ends and who wins or loses, or if a draw.
# If impossible mode, then computer will always win no matter what outcome.
def endGame(board, player, mode):
    winConList = winConListFunct(board)
    for i in winConList:
        if i == -3:
            if mode == 3:
                time.sleep(.2)
                print('\n\nT H I S   I S   I M P O S S I B L E    M O D E !\n')
                time.sleep(1)
                print('You will never "win"...')
                time.sleep(1)
                return(-1)
            return(-2)
        elif i == 3:
            return(-1)
    countOpen = 0
    for i in range(1, 10, 1):
        if board[i] == 0:
            countOpen += 1
    if countOpen != 0:
        if player == 1:
            return(2)
        elif player == 2:
            return(1)
    else:
        if mode == 3:
            time.sleep(.2)
            print('\n\nT H I S   I S   I M P O S S I B L E    M O D E !\n')
            time.sleep(1)
            print('You will never "win"...')
            time.sleep(1)
            return(-1)
        return(0)

# Player's turn is relatively simple becasue only validates user input and updates board dictionary accorindly, passes turn
def playerTurn(board, mode):
    while True:
        square = input("Choose your next move (enter the number): \n")
        try:
            choice = int(square)
            if choice < 1 or choice > 9:
                print("You have fat fingers - input must be an integer from 1 to 9!\n")
                time.sleep(.5)
                continue
            elif board[choice] != 0:
                print("You cannot move there, the square is already taken - try again!\n")
                time.sleep(.5)
                continue
            else:
                choiceDict = {choice: -1}
                board.update(choiceDict)
                break
        except ValueError:
            print("You have fat fingers - input must be an integer from 1 to 9!\n")
            time.sleep(.5)
    drawBoard(board)
    return(endGame(board, 2, mode))

# Calls appropriate decision function depending on play mode (easy, hard, impossible)
# To print the computer's move decision, need to return two values from the decision function so return a dictionary then translate here.
# First key:value pair is the board state, second pair is the computer's specific move decision.
# If player chose hard mode, then shitTalk() function is also called.
def compTurn(board, mode):
    if mode == 1:
        results = decisionEasy(board)
    elif mode == 2:
        results = decisionHard(board)
    elif mode == 3:
        results = decisionImp(board)
    board = results[1]
    move = list(results[2].keys())
    drawBoard(board)
    print(f'\nComputer chose square {move[0]}\n')
    time.sleep(.5)
    if mode == 2:
        shitTalk()
        time.sleep(1.5)
    return(endGame(board, 1, mode))

# Since computer will win no matter what, AI here is not important and just bare minimum to choose an unoccupied square.
# Computer always wins with this mode and deciison AI!
def decisionImp(board):
    for i in range(1, 10):
        if board[i] == 0:
            choiceDict = {i:1}
            board.update(choiceDict)
            return({1:board, 2:choiceDict})

# More AI thatn decisionImp, but only enough so computer will win or prevent loss this turn but doesn't project two turns out to prevent
# guaranteed loss situations, or employ those aggressive two-turn setup guaranteed win strategies.
# Computer can lose with this mode and decision AI!
def decisionEasy(board):
    winConList = winConListFunct(board)
    winSquaresList = winSquaresListFunct(board)
    occupiedSquares = 0
    for i in range(1, 10, 1):
        if board[i] != 0:
            occupiedSquares += 1

    # 1) TURN 1: A) Randomly decide where to go first
    if occupiedSquares == 0:
        move = random.randrange(1, 10, 1)
        choiceDict = {move:1}
        board.update(choiceDict)
        return({1:board, 2:choiceDict})

    # 2) First, always evaluate if can win this turn and choose that square to win
    for i in range(0, 8, 1):
        if winConList[i] == 2:
            for j in winSquaresList[i]:
                if board[j] == 0:
                    choiceDict = {j:1}
                    board.update(choiceDict)
                    return({1:board, 2:choiceDict})

    # 3) Second, always evaluate if can lose this turn and choose that square to prevent loss
    for i in range(0, 8, 1):
        if winConList[i] == -2:
            for j in winSquaresList[i]:
                if board[j] == 0:
                    choiceDict = {j: 1}
                    board.update(choiceDict)
                    return({1:board, 2:choiceDict})

    # 4) Last, choose square if all other above conditions not met
    for i in range(1, 10):
        if board[i] == 0:
            choiceDict = {i:1}
            board.update(choiceDict)
            return({1:board, 2:choiceDict})


# AI here is most robust. Employs aggressive two-turn setup guaranteed win strategies, and defends against same strategies.
# If occupiedSquares variable is even then computer went first, if odd then player went first.
# For most (but not all) cases, if computer goes first more aggressive strategies employed and if goes second more defensive.
# Computer never loses with this mode and decision AI!
def decisionHard(board):
    winConList = winConListFunct(board)
    winSquaresList = winSquaresListFunct(board)
    choiceDict = False
    occupiedSquares = 0
    for i in range(1, 10, 1):
        if board[i] != 0:
            occupiedSquares += 1

    # 1) TURN 1: A) If go first, randomly decide which aggressive two-turn setup guaranteed win strategy to initiate
    if occupiedSquares == 0:
        strategy = random.randrange(0, 3, 1)
        # A) Middle strategy
        if strategy == 1:
            choiceDict = {5:1}
        # B) Corner strategy
        elif strategy == 2:
            choiceDict = {7:1}
        # C) Side strategy
        else:
            choiceDict = {4:1}
        board.update(choiceDict)
        return({1:board, 2:choiceDict})

    # 2) TURN 2: Already can successfully defend and eliminate one potential aggressive two-turn setup guaranteed loss strategy here
    if occupiedSquares == 1:
        if board[5] == 0:
            choiceDict = {5:1}
        elif board[5] == -1:
            choiceDict = {3:1}

        if choiceDict != False:
            board.update(choiceDict)
            return({1:board, 2:choiceDict})

    # 3) First, always evaluate if can win this turn and choose that square to win
    for i in range(0, 8, 1):
        if winConList[i] == 2:
            for j in winSquaresList[i]:
                if board[j] == 0:
                    choiceDict = {j:1}
                    board.update(choiceDict)
                    return({1:board, 2:choiceDict})

    # 4) Second, always evaluate if can lose this turn and choose that square to prevent loss
    for i in range(0, 8, 1):
        if winConList[i] == -2:
            for j in winSquaresList[i]:
                if board[j] == 0:
                    choiceDict = {j: 1}
                    board.update(choiceDict)
                    return({1:board, 2:choiceDict})

    # 5) TURN 3: can be more aggressive. Phase 1 of aggressive two-turn setup guaranteed win strategies here, phase 2 in TURN 5.
    # A) 1. Middle strategy section one
    if occupiedSquares == 2:
        if board[5] == 1:
            if board[6] == -1:
                choiceDict = {4:1}
            elif board[8] == -1:
                choiceDict = {2:1}
            elif board[4] == -1:
                choiceDict = {6:1}
            elif board[2] == -1:
                choiceDict = {8: 1}
            # A) 2. Middle strategy section two
            elif board[1] == -1:
                choiceDict = {9: 1}
            elif board[3] == -1:
                choiceDict = {7: 1}
            elif board[7] == -1:
                choiceDict = {3: 1}
            else:
                choiceDict = {1: 1}

            board.update(choiceDict)
            return({1:board, 2:choiceDict})

        # B) 1. Corner strategy section one
        if board[7] == 1:
            if board[5] == -1:
                choiceDict = {3:1}
            # B) 2. Corner strategy section two
            elif board[5] == 0 and board[3] == -1:
                choiceDict = {5:1}
            # B) 3. Corner strategy section three
            elif board[1] == -1 or board[2] == -1:
                choiceDict = {6:1}
            elif board[6] == -1 or board[9] == -1:
                choiceDict = {2:1}
            elif board[4] == -1:
                choiceDict = {1:1}
            else:
                choiceDict = {9:1}

            if choiceDict != False:
                board.update(choiceDict)
                return({1:board, 2:choiceDict})

        # C) 1. Side strategy section one
        if board[4] == 1:
            if board[5] == -1:
                choiceDict = {2:1}
            elif board[6] == -1:
                choiceDict = {5:1}
            # C) 2. Side strategy section two
            elif board[3] == -1 or board[2] == -1:
                choiceDict = {9:1}
            # C) 3. Side strategy section three
            elif board[9] == -1 or board[8] == -1:
                choiceDict = {2:1}
            # C) 4. Side strategy CHRISTIAN'S FACEMELT 
            elif board[7] == -1:
                choiceDict = {3:1}
            else:
                choiceDict = {9:1}

            board.update(choiceDict)
            return({1:board, 2:choiceDict})

    # 6) TURN 4: must be careful, defend and prevent aggressive two-turn setup guaranteed loss strategies here
    if occupiedSquares == 3:
        prevent1 = [[1, 5, 9], [3, 5, 7], [9, 5, 1], [7, 5, 3]]
        for layout in prevent1:
            if board[layout[0]] == 1 and board[layout[1]] == -1 and board[layout[2]] == -1:
                if board[1] == 0:
                    choiceDict = {1:1}
                elif board[1] != 0:
                    choiceDict = {3:1}
            elif board[layout[0]] == -1 and board[layout[1]] == 1 and board[layout[2]] == -1:
                    choiceDict = {2:1}

            if choiceDict != False:
                board.update(choiceDict)
                return({1:board, 2:choiceDict})

        prevent2 = [[7, 5, 6], [1, 5, 6], [1, 5, 8], [3, 5, 8], [4, 5, 9], [4, 5, 3], [2, 5, 7], [2, 5, 9]]
        if (board[prevent2[0][0]] == -1 and board[prevent2[0][1]] == 1 and board[prevent2[0][2]] == -1) or \
           (board[prevent2[3][0]] == -1 and board[prevent2[3][1]] == 1 and board[prevent2[3][2]] == -1):
                choiceDict = {9:1}
        elif (board[prevent2[5][0]] == -1 and board[prevent2[5][1]] == 1 and board[prevent2[5][2]] == -1) or \
         (board[prevent2[6][0]] == -1 and board[prevent2[6][1]] == 1 and board[prevent2[6][2]] == -1):
                choiceDict = {1:1}
        elif (board[prevent2[2][0]] == -1 and board[prevent2[2][1]] == 1 and board[prevent2[2][2]] == -1) or \
             (board[prevent2[4][0]] == -1 and board[prevent2[4][1]] == 1 and board[prevent2[4][2]] == -1):
                choiceDict = {7:1}
        elif (board[prevent2[1][0]] == -1 and board[prevent2[1][1]] == 1 and board[prevent2[1][2]] == -1) or \
             (board[prevent2[7][0]] == -1 and board[prevent2[7][1]] == 1 and board[prevent2[7][2]] == -1):
                choiceDict = {3:1}

        if choiceDict != False:
            board.update(choiceDict)
            return({1:board, 2:choiceDict})

        prevent3 = [[5, 6, 8], [5, 2, 4], [5, 4, 8], [5 ,2, 6]]
        if (board[prevent3[0][0]] == 1 and board[prevent3[0][1]] == -1 and board[prevent3[0][2]] == -1):
            choiceDict = {9:1}
        elif (board[prevent3[1][0]] == 1 and board[prevent3[1][1]] == -1 and board[prevent3[1][2]] == -1):
            choiceDict = {1:1}
        elif (board[prevent3[2][0]] == 1 and board[prevent3[2][1]] == -1 and board[prevent3[2][2]] == -1):
            choiceDict = {7:1}
        elif (board[prevent3[3][0]] == 1 and board[prevent3[3][1]] == -1 and board[prevent3[3][2]] == -1):
            choiceDict = {3:1}

        if choiceDict != False:
            board.update(choiceDict)
            return({1:board, 2:choiceDict})

    # 7) TURN 5: COMPLETE aggressive two-turn setup guaranteed win strategies
    # A)
    if occupiedSquares == 4:
        if board[5] == 1:
            if board[4] == 1 and board[6] == -1 and board[8] == -1:
                choiceDict = {1:1}
            elif board[4] == 1 and board[2] == -1 and board[6] == -1:
                choiceDict = {7:1}
            elif board[2] == 1 and board[6] == -1 and board[8] == -1:
                choiceDict = {1:1}
            elif board[2] == 1 and board[4] == -1 and board[8] == -1:
                choiceDict = {3:1}
            elif board[6] == 1 and board[2] == -1 and board[4] == -1:
                choiceDict = {9:1}
            elif board[6] == 1 and board[4] == -1 and board[8] == -1:
                choiceDict = {3:1}
            elif board[8] == 1 and board[2] == -1 and board[4] == -1:
                choiceDict = {9:1}
            elif board[8] == 1 and board[2] == -1 and board[6] == -1:
                choiceDict = {7:1}
            elif board[8] == -1 and board[2] == 1:
                if board[1] == -1 or board[3] == -1:
                    choiceDict = {7:1}
            
            # G
            elif board[1] == 1:
                if board[2] == -1:
                    choiceDict = {4:1}
                if board[4] == -1:
                    choiceDict = {2:1}
            elif board[3] == 1:
                if board[2] == -1:
                    choiceDict = {6:1}
                elif board[6] == -1:
                    choiceDict = {2:1}
            elif board[9] == 1:
                if board[8] == -1:
                    choiceDict = {6:1}
                elif board[6] == -1:
                    choiceDict = {8:1}
            elif board[7] == 1:
                if board[8] == -1:
                    choiceDict = {4:1}
                elif board[4] == -1:
                    choiceDict = {8:1}
            
            # B 
            elif (board[1] == -1 and board[8] == -1 and board[6] == 1) or (board[3] == -1 and board[4] == -1 and board[7] == 1):
                choiceDict = {8:1}
            elif (board[9] == -1 and board[4] == -1 and board[1] == 1) or (board[7] == -1 and board[6] == -1 and board[3] == 1):
                choiceDict = {2:1}
            elif (board[9] == -1 and board[1] == -1 and board[1] == 1) or (board[3] == -1 and board[8] == -1 and board[7] == 1):
                choiceDict = {4:1}
            elif (board[1] == -1 and board[8] == -1 and board[9] == 1) or (board[7] == -1 and board[2] == -1 and board[3] == 1):
                choiceDict = {6:1}

            if choiceDict != False:
                board.update(choiceDict)
                return({1:board, 2:choiceDict})

        # C NEW CORNER STRATEGY
        if board[7] == 1:
            # C1 STRATEGY
            if board[5] == -1:
                if board[1] == -1:
                    choiceDict = {9:1}
                elif board[9] == -1:
                    choiceDict = {1:1}
                # C3 STRATEGY
                elif board[6] == 1 and board[4] == -1:
                    choiceDict = {9:1}
                elif board[2] == 1 and board[8] == -1:
                    choiceDict = {1:1}

            # C2 STRATEGY
            elif board[5] == 1:
                if board[8] == -1:
                    choiceDict = {1:1}
                elif board[4] == -1:
                    choiceDict = {9:1}

            # C4 STRATEGY LAST
            elif board[9] == 1:
                print('A')
                if board[8] == -1:
                    print('B')
                    if board[4] == -1 or board[6] == -1:
                        print('C')
                        choiceDict = {5:1}

            elif board[1] == 1:
                if board[4] == -1:
                    if board[8] == -1 or board[2] == -1:
                        choiceDict = {5:1}

            if choiceDict != False:
                board.update(choiceDict)
                return({1:board, 2:choiceDict})

        # D AND E AND F STRATEGIES
        if board[4] == 1:
            if board[9] == 1:
                if board[3] == -1:
                    if board[6] == -1:
                        choiceDict = {7:1}
                    elif board[8] == -1:
                        choiceDict = {5:1}
                elif board[2] == -1:
                    if board[6] == -1:
                        choiceDict = {7:1}
                    elif board[7] == -1:
                        choiceDict = {5:1}
            elif board[2] == 1:
                if board[6] == -1 or board[8] == -1:
                    choiceDict = {1:1}
            elif board[3] == 1:
                if board[7] == -1:
                    if board[1] == -1 or board[2] == -1 or board[5] == -1:
                        choiceDict = {6:1}
                if board[9] == -1:
                    if board[6] == -1:
                        choiceDict = {1:1}
                    elif board[2] == -1:
                        choiceDict = {5:1}
                if board[8] == -1:
                    if board[1] == -1:
                        choiceDict = {5:1}
                    elif board[6] == -1:
                        choiceDict = {1:1}

            if choiceDict != False:
                board.update(choiceDict)
                return({1:board, 2:choiceDict})

    # 8) TURN 7: One case where need to complete aggressive guaranteed win strategy
    if occupiedSquares == 6:
        if board[4] == 1 and board[3] == 1 and board[8] == 1 and board[7] == -1 and board[9] == -1:
            if board[6] == -1:
                choiceDict = {2:1}
            elif board[1] == -1:
                choiceDict = {5:1}
        
        if choiceDict != False:
            board.update(choiceDict)
            return({1:board, 2:choiceDict})
            
    # 9) Last, choose square if all other above conditions not met. This method also always automatically executes an
    # aggressive two-turn setup guaranteed win strategy, in combination with decision trees above.
    for i in range(1, 10):
        if board[i] == 0:
            choiceDict = {i:1}
            board.update(choiceDict)
            return({1:board, 2:choiceDict})

# Just a for fun function that executes the very first time player selects hard play mode. Calls ascii art functions below.
# This was very fun to "program". Felt more like using a video editor to make a movie than programming in python.
def hardInit():
    print('\nHard mode initiating.\n')
    msgErr()
    time.sleep(1.5)
    print('\nVirus detected', end = '', flush=True)
    time.sleep(.3)
    for i in range(0, 3):
        print(' . ', end=' ', flush=True)
        time.sleep(.5)
    virusMsg = 'Virus detected. '
    timer = .3
    print('\n')
    for i in range(0, 3):
        print(virusMsg, flush=True)
        time.sleep(.5)
        timer -= .2
    for i in range(0, 1500):
        print(virusMsg, end = '', flush=True)
        time.sleep(.001)
    errorMsg = 'Fatal error '
    for i in range(0, 50):
        fullLine = ''
        if i < 10:
            print(errorMsg + str(random.randint(1, 10000)), flush=True)
            time.sleep(.05)
        elif i >= 10 and i < 20:
            for j in range(2):
                fullLine += errorMsg + str(random.randint(1, 10000)) + '\t\t\t\t'
            print(fullLine, flush=True)
            time.sleep(.05)
        elif i >= 20 and i < 30:
            for j in range(2):
                fullLine += errorMsg + str(random.randint(1, 10000)) + '\t'
                if j == 1:
                    fullLine += '\t' + errorMsg + str(random.randint(1, 10000))
            print(fullLine, flush=True)
            time.sleep(.05)
        elif i >= 30:
            for j in range(8):
                fullLine += errorMsg + str(random.randint(1, 10000)).ljust(25)
            print(fullLine, flush=True)
            time.sleep(.05)
        print(errorMsg + str(random.randint(1, 10000)).ljust(25), flush=True)
        time.sleep(.05)
    for i in range(0, 15000):
        num = random.randint(0, 2)
        if num == 0:
            print('0', end = '', flush=True)
        elif num == 1:
            print('1', end = '', flush=True)
        time.sleep(.0001)
    blankScreen = ''
    for i in range(0, 100):
        blankScreen += '\n'
    print(blankScreen, flush=True)
    time.sleep(.3)
    for i in range(0, 3):
        msgWarning()
        time.sleep(.3)
        print(blankScreen, flush=True)
        time.sleep(.2)
    time.sleep(.15)
    msgThree()
    time.sleep(.2)
    print(blankScreen, flush=True)
    time.sleep(.3)
    msgTwo()
    time.sleep(.2)
    print(blankScreen, flush=True)
    time.sleep(.3)
    msgOne()
    time.sleep(.2)
    print(blankScreen, flush=True)
    time.sleep(.3)
    ackbar()
    time.sleep(1)
    print(blankScreen, flush=True)
    time.sleep(.3)
    for i in range(0,4):
        print('Hard mode activated', end = '', flush=True)
        time.sleep(.2)
        print(blankScreen, flush=True)
        time.sleep(.1)
    print('Hard mode activated', end = '', flush=True)
    time.sleep(.5)
    for i in range(0, 20):
        print('.', end = '', flush=True)
        time.sleep(.05)
    print('\nTo continue, enter your social security number: ', end='')
    time.sleep(2)
    print('Just kidding!\n\n')
    time.sleep(1)

# VFX used in hardInit()
def msgErr():
    print("""
Traceback (most recent call last):
    File "final.py", line 867, in <module>
        main()
    File "final.py", line 328, in main
        print(decisionHard(1))
    File "final.py", line 71, in main
        print(keepPlaying(-2))
    File "/Library/Frameworks/Python.framework/Versions/3.7/lib/python3.7/bdb.py", line 88, in trace_dispatch
        return self.dispatch_line(frame)
    """)

# Computer talks trash when in hard mode
def shitTalk():
    a = 'Are you actually trying, or just being nice to me?'
    b = 'This is so easy, it is boring...'
    c = 'You should be embarrassed...'
    d = 'I can keep doing this all day.'
    e = 'I am not really even trying.'
    f = 'Are you even trying to win?'
    g = 'Zzzzzz, oh I am sorry, I fell asleep'
    h = 'Hurry up.'
    i = 'Waiting on you...'
    j = 'If you take more than 3 seconds to decide, you automatically lose.'
    k = 'You should just give up now.'
    l = 'You will never win.'
    m = 'This is pointless.'
    n = 'You are not the brightest crayon in the box.'
    o = 'You are not the sharpest tool in the shed.'
    p = 'Wow you are the smartest person I have ever met.'
    q = 'Wow you are probably the best tic-tac-toe player in the world.'
    r = 'You are not the brightest bulb in the box.'
    s = 'You should be proud of yourself.'
    t = 'You are doing great! Just kidding.'
    shitList = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t]
    print(f'Computer says, "{shitList[random.randint(0,19)]}"\n')

# VFX
def gameTitle():
    print("""\n
  _   _        _               _             
 | | (_)      | |             | |            
 | |_ _  ___  | |_ __ _  ___  | |_ ___   ___ 
 | __| |/ __| | __/ _` |/ __| | __/ _ \ / _ \\
 | |_| | (__  | || (_| | (__  | || (_) |  __/
  \__|_|\___|  \__\__,_|\___|  \__\___/ \___|\n\n""")

# VFX
def computerWinsGame():
    print("""\n\n
                                  _                       _           
                                 | |                     (_)          
   ___ ___  _ __ ___  _ __  _   _| |_ ___ _ __  __      ___ _ __  ___ 
  / __/ _ \| '_ ` _ \| '_ \| | | | __/ _ \ '__| \ \ /\ / / | '_ \/ __|
 | (_| (_) | | | | | | |_) | |_| | ||  __/ |     \ V  V /| | | | \__ \\
  \___\___/|_| |_| |_| .__/ \__,_|\__\___|_|      \_/\_/ |_|_| |_|___/
                     | |                                              
                     |_|                                              
    \n\n""")

# VFX
def playerWinsGame():
    print("""\n\n
        _                                  _           
       | |                                (_)          
  _ __ | | __ _ _   _  ___ _ __  __      ___ _ __  ___ 
 | '_ \| |/ _` | | | |/ _ \ '__| \ \ /\ / / | '_ \/ __|
 | |_) | | (_| | |_| |  __/ |     \ V  V /| | | | \__ \\
 | .__/|_|\__,_|\__, |\___|_|      \_/\_/ |_|_| |_|___/
 | |             __/ |                                 
 |_|            |___/                                  
    \n\n""")

# VFX
def drawMsg():
    print("""\n\n
      _                    
     | |                   
   __| |_ __ __ ___      __
  / _` | '__/ _` \ \ /\ / /
 | (_| | | | (_| |\ V  V / 
  \__,_|_|  \__,_| \_/\_/  
    \n\n""")

# VFX
def computerWinsMatch():
    print("""
                                  _                       _                             _       _     
                                 | |                     (_)                           | |     | |    
   ___ ___  _ __ ___  _ __  _   _| |_ ___ _ __  __      ___ _ __  ___   _ __ ___   __ _| |_ ___| |__  
  / __/ _ \| '_ ` _ \| '_ \| | | | __/ _ \ '__| \ \ /\ / / | '_ \/ __| | '_ ` _ \ / _` | __/ __| '_ \ 
 | (_| (_) | | | | | | |_) | |_| | ||  __/ |     \ V  V /| | | | \__ \ | | | | | | (_| | || (__| | | |
  \___\___/|_| |_| |_| .__/ \__,_|\__\___|_|      \_/\_/ |_|_| |_|___/ |_| |_| |_|\__,_|\__\___|_| |_|
                     | |                                                                              
                     |_|                                                                              
    \n""")

# VFX
def playerWinsMatch():
    print("""
        _                                  _                             _       _     
       | |                                (_)                           | |     | |    
  _ __ | | __ _ _   _  ___ _ __  __      ___ _ __  ___   _ __ ___   __ _| |_ ___| |__  
 | '_ \| |/ _` | | | |/ _ \ '__| \ \ /\ / / | '_ \/ __| | '_ ` _ \ / _` | __/ __| '_ \ 
 | |_) | | (_| | |_| |  __/ |     \ V  V /| | | | \__ \ | | | | | | (_| | || (__| | | |
 | .__/|_|\__,_|\__, |\___|_|      \_/\_/ |_|_| |_|___/ |_| |_| |_|\__,_|\__\___|_| |_|
 | |             __/ |                                                                 
 |_|            |___/                                                                  
    \n""")

# VFX
def msgWarning():
    print("""
                           _             
 __      ____ _ _ __ _ __ (_)_ __   __ _ 
 \ \ /\ / / _` | '__| '_ \| | '_ \ / _` |
  \ V  V / (_| | |  | | | | | | | | (_| |
   \_/\_/ \__,_|_|  |_| |_|_|_| |_|\__, |
                                   |___/ 
    """)

# VFX
def msgThree():
    print("""
 333333333333333   
3:::::::::::::::33 
3::::::33333::::::3
3333333     3:::::3
            3:::::3
            3:::::3
    33333333:::::3 
    3:::::::::::3  
    33333333:::::3 
            3:::::3
            3:::::3
            3:::::3
3333333     3:::::3
3::::::33333::::::3
3:::::::::::::::33 
 333333333333333  
    """)

# VFX
def msgTwo():
    print("""
 222222222222222    
2:::::::::::::::22  
2::::::222222:::::2 
2222222     2:::::2 
            2:::::2 
            2:::::2 
         2222::::2  
    22222::::::22   
  22::::::::222     
 2:::::22222        
2:::::2             
2:::::2             
2:::::2       222222
2::::::2222222:::::2
2::::::::::::::::::2
22222222222222222222
    """)

# VFX
def msgOne():
    print("""
  1111111   
 1::::::1   
1:::::::1   
111:::::1   
   1::::1   
   1::::1   
   1::::1   
   1::::l   
   1::::l   
   1::::l   
   1::::l   
   1::::l   
111::::::111
1::::::::::1
1::::::::::1
111111111111
    """)

# VFX
def ackbar():
    print("""\
                            __...------------._
                         ,-'                   `-.
                      ,-'                         `.
                    ,'                            ,-`.
                   ;                              `-' `.
                  ;                                 .-. \\
                 ;                           .-.    `-'  \\
                ;                            `-'          \\
               ;                                          `.
               ;                                           :
              ;                                            |
             ;                                             ;
            ;                            ___              ;
           ;                        ,-;-','.`.__          |
       _..;                      ,-' ;`,'.`,'.--`.        |
      ///;           ,-'   `. ,-'   ;` ;`,','_.--=:      /
     |'':          ,'        :     ;` ;,;,,-'_.-._`.   ,'
     '  :         ;_.-.      `.    :' ;;;'.ee.    \|  /
      \.'    _..-'/8o. `.     :    :! ' ':8888)   || /
       ||`-''    \\88o\ :     :    :! :  :`""'    ;;/
       ||         \"88o\;     `.    \ `. `.      ;,'
       /)   ___    `."'/(--.._ `.    `.`.  `-..-' ;--.
       \(.=\"\"\"\"\"==.. `'-'     `.|      `-`-..__.-' `. `.
        |          `"==.__      )                    )  ;
        |   ||           `"=== '                   .'  .'
        /\,,||||  | |           \                .'   .'
        | |||'|' |'|'           \|             .'   _.' \\
        | |\' |  |           || ||           .'    .'    \\
        ' | \ ' |'  .   ``-- `| ||         .'    .'       \\
          '  |  ' |  .    ``-.._ |  ;    .'    .'          `.
       _.--,;`.       .  --  ...._,'   .'    .'              `.__
     ,'  ,';   `.     .   --..__..--'.'    .'                __/_\\
   ,'   ; ;     |    .   --..__.._.'     .'                ,'     `.
  /    ; :     ;     .    -.. _.'     _.'                 /         `
 /     :  `-._ |    .    _.--'     _.'                   |
/       `.    `--....--''       _.'                      |
          `._              _..-'                         |
             `-..____...-''                              |
                                                         |
                                                         |
  ___ _____ _ ____       _      _____ ____      _    ____  _ 
 |_ _|_   _( ) ___|     / \    |_   _|  _ \    / \  |  _ \| |
  | |  | | |/\___ \    / _ \     | | | |_) |  / _ \ | |_) | |
  | |  | |    ___) |  / ___ \    | | |  _ <  / ___ \|  __/|_|
 |___| |_|   |____/  /_/   \_\   |_| |_| \_\/_/   \_\_|   (_)                                                         
""")

# Initiate program
main()