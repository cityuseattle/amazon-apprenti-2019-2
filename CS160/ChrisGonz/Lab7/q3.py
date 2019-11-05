def eg2_lc(sentence):
    vowels = 'aeiou'
    
    return "".join([j for j in sentence if j not in vowels])
    

user_input = "the quick brown fox jumped over the lazy dog"

print(eg2_lc(user_input))