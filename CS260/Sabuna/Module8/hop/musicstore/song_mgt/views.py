from django.shortcuts import render
from . import forms, models
from django.core.exceptions import ValidationError
import sys

# Create your views here.
def add_song(request):
    title = "Add a new song"
    if request.method == 'POST':
        # POST, generate form with data from the request
        form = forms.SongForm(request.POST)
        # Reference is now a bound instance with user data sent in POST
        # Call is_valid() to validate data and create cleaned_data and errors dict
        if form.is_valid():
            #EXTRAT FORM VALUES
            song_title = form.cleaned_data['title']
            artists = form.cleaned_data['artists']
            album = form.cleaned_data['album']
            genre = forms.GENRES[int(form.cleaned_data['genre'])][1]
            year = form.cleaned_data['year']
            album_image = form.cleaned_data['album_image']

            try:
                models.create_process(song_title, artists, album, genre, year, album_image)
                action='POST_SUCCESSFULL'
            except ValidationError as err:
                for err in err.messages:
                    form.add_error(None, err)
                action = 'POST_FAILED'
            # Form data is valid, you can now access validated values in the cleaned_data dict
            # e.g. form.cleaned_data['title']
            except:
                print("Unexpected error: "  + str(sys.exc_info()[0]))
                form.add_error(None, 'Unexpected error -Please contact your system administrator')
                action = 'POST_FAILED'
        else:
            action = 'POST_FAILED'

    else:
        action = 'GET'
        # Disable auto_id to prevent the form from generating verbose information.
        # Also, we set the initial value to the album image field
        form = forms.SongForm(auto_id=False,initial={'album_image':'http://'})
        # Reference is now an unbound (empty) form
    # Reference form instance (bound/unbound) is sent to template for rendering
    return render(request, 'song/song_form.html', {'action': action,'form': form,'title': title})
def fetch_all_songs(request):
    song_dict = models.fetch_all_songs_process()
    
    return render(request, 'homepage.html', {'song_dict': song_dict})
