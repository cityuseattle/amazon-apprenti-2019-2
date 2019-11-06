  
import random
  
def boardLayout(board):
       # This function creates a board layout.
  
      print(board[7] + '|' + board[8] + '|' + board[9])
      print('-+-+-')
      print(board[4] + '|' + board[5] + '|' + board[6])
      print('-+-+-')
      print(board[1] + '|' + board[2] + '|' + board[3])
 
def inputPlayerCharacter():
      
      # player character input
    letter = ''
    while not (letter == 'X' or letter == 'O'):
         print('Select a letter: X or O?')
         letter = input().upper()

     
    if letter == 'X':
          return ['X', 'O']
    else:
          return ['O', 'X']
 
def firstPlayer():
      # Randomly selection of player
      if random.randint(0, 1) == 0:
          return 'computer'
      else:
          return 'player'
 
def performAction(board, letter, move):
      board[move] = letter
 
def winner(bo, le):
     # Corners and sides 
    # "bo" stands for "board" and "le" stands for "letter" 
     return ((bo[7] == le and bo[8] == le and bo[9] == le) or # top
     (bo[4] == le and bo[5] == le and bo[6] == le) or # middle
     (bo[1] == le and bo[2] == le and bo[3] == le) or #  bottom
     (bo[7] == le and bo[4] == le and bo[1] == le) or #  left side
     (bo[8] == le and bo[5] == le and bo[2] == le) or #  middle
     (bo[9] == le and bo[6] == le and bo[3] == le) or # right side
     (bo[7] == le and bo[5] == le and bo[3] == le) or # Diagonal
     (bo[9] == le and bo[5] == le and bo[1] == le)) # Diagonal

def boardList(board):
     
     boardCopy = []
     for i in board:
         boardCopy.append(i)
     return boardCopy

def spaceOpen(board, move):
     
     return board[move] == ' '

def playerInput(board):
     # player input 1-9
     move = ' '
     while move not in '1 2 3 4 5 6 7 8 9'.split() or not spaceOpen(board, int(move)):
         print('Next move? (1-9)')
         move = input()
     return int(move)

def randomValidMove(board, movesList):
     # Returns a valid move 
     
     possibleMoves = []
     for i in movesList:
         if spaceOpen(board, i):
             possibleMoves.append(i)

     if len(possibleMoves) != 0:
         return random.choice(possibleMoves)
     else:
         return None

def computerInput(board, computerLetter):
     
     if computerLetter == 'X':
         playerLetter = 'O'
     else:
         playerLetter = 'X'

     
     
     for i in range(1, 10):
         boardCopy = boardList(board)
         if spaceOpen(boardCopy, i):
             performAction(boardCopy, computerLetter, i)
             if winner(boardCopy, computerLetter):
                 return i

     # Check next move and block them.
     for i in range(1, 10):
         boardCopy = boardList(board)
         if spaceOpen(boardCopy, i):
             performAction(boardCopy, playerLetter, i)
             if winner(boardCopy, playerLetter):
                 return i

     # Select the corners, if available.
     move = randomValidMove(board, [1, 3, 7, 9])
     if move != None:
         return move

     # Select the center, if available.
     if spaceOpen(board, 5):
         return 5

    
     return randomValidMove(board, [2, 4, 6, 8])

def checkBoardSpace(board):
     # Check for empty board space, return true if taken.
    for i in range(1, 10):
         if spaceOpen(board, i):
             return False
    return True


print('Let\'s play Tic-Tac-Toe!')

while True:
     
    theBoard = [' '] * 10
    playerLetter, computerLetter = inputPlayerCharacter()
    turn = firstPlayer()
    print('The ' + turn + ' will go first.')
    gameOn = True

    while gameOn:
        if turn == 'player':
             # Player's turn
            boardLayout(theBoard)
            move = playerInput(theBoard)
            performAction(theBoard, playerLetter, move)

            if winner(theBoard, playerLetter):
                boardLayout(theBoard)
                print('AHHHHH! you won!')
                gameOn = False
            else:
                if checkBoardSpace(theBoard):
                    boardLayout(theBoard)
                    print('Try again, game is a draw!')
                    break
                else:
                    turn = 'computer'

        else:
             # Computer's turn
            move = computerInput(theBoard, computerLetter)
            performAction(theBoard, computerLetter, move)

            if winner(theBoard, computerLetter):
                boardLayout(theBoard)
                print('The computer won! You lose.')
                gameOn = False
            else:
                if checkBoardSpace(theBoard):
                    boardLayout(theBoard)
                    print('Try again, game is a draw!')
                    break
                else:
                    turn = 'player'

    print('Do you want to play again? (yes or no)')
    if not input().lower().startswith('y'):
        break
    