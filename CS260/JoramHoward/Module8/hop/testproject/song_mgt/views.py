from django.shortcuts import render
from . import forms, models
from django.core.exceptions import ValidationError
import sys

# Create your views here.
def add_song(request):
    title = "Add a new song"
    if request.method == 'POST':
        form = forms.SongForm(request.POST)
        if form.is_valid():
            song_title = form.cleaned_data['title']
            artists = form.cleaned_data['artists']
            album = form.cleaned_data['album']
            genre = form.GENRES[int(form.cleaned_data['genre'])][1]
            year = form.cleaned_data['year']
            album_image = form.cleaned_data['album_image']

            try:
                models.create_process(song_title, artists, album, genre, year, album_image)
                action='POST_SUCCESSFUL'
            except ValidationError as err:
                for err in err.messages:
                    form.add_error(None, err)
                action = 'POST_FAILED'
            except:
                print("Unexpected error: " + str(sys.exc_info()[0]))
                form.add_error(None, 'Unexpected error - Please contact your system administrator')
                action = 'POST_FAILED'
        else:
            action='POST_FAILED'
    else:
        action='GET'
        form = forms.SongForm(auto_id=False,initial={
                              'album_image':'http://'})
    return render(request,'song/song_form.html', {'action': action,'form': form,'title': title})

def fetch_all_songs(request):
    song_dict = models.fetch_all_songs_process()

    return render(request, 'homepage.html', {'song_dict': song_dict})