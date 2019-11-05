from django.shortcuts import render
from . import forms
# Create your views here.

def add_song(request):
    title = " Add a new song"
    if request.method == 'POST':
        form = forms.SongForm(request.POST)
        if form.is_valid():
            action='POST_SUCCESSFULL'
        else:
            action= 'POST_FAILED'
    else:
        action='GET'
        form = forms.SongForm(auto_id=False, initial={'album_image':'http://'})

    return render(request, 'song/song_form.html',{'action':action, 'form':form, 'title':title})