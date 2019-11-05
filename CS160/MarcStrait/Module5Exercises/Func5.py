import string 
  
letters = set(string.ascii_lowercase) 
  
def pangram(string): 
    return set(string.lower()) >= letters 
      
string = 'The quick brown fox jumps over the lazy dog'
if(pangram(string) == True): 
    print('Yes, the current input is a pangram.') 
else: 
    print('No, the current input is not a pangram.')