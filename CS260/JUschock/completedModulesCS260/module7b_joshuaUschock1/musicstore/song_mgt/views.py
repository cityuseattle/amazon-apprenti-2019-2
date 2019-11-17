from django.shortcuts import render
from . import forms 

# Create your views here.
def add_song(request):
    title = "Add a new song"
    if request.method == 'POST':
        # POST, generate form with data from the request 
        form = forms.songForm(request.POST) 
        # Reference is now a bound instance with user data sent in POST 
        # Call is_valid() to validate data and create cleaned_data and errors dict 
        if form.is_valid(): 
            action='POST_SUCCESSFUL'
        else: 
            action='POST_FAILED' 
    else:
        action='GET'
        form = forms.SongForm(auto_id=False,initial={'album_image':'http://'})
    return render(request,'song/song_form.html',{'action':action,'form':form,'title':title}) 
