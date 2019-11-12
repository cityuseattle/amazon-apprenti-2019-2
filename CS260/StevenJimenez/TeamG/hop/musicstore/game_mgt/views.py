from django.shortcuts import render
from . import forms

# Create your views here.
def add_game(request):
    title = "Add a Board Game"
    if request.method == 'POST':

        form = forms.gameForm(request.POST)

        if form.is_valid():
            action='POST_SUCCESSFUL'
        else:
            action='POST_FAILED'
    else:
        action='GET'
        form = forms.gameForm(auto_id=False,initial={'album_image':'http://'})
    return render(request, 'song/song_form.html',{'action':action,'form':form,'title':title})
