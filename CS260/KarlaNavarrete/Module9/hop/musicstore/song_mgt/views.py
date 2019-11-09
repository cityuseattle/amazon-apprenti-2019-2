from django.shortcuts import render
from . import forms, models
from django.core.exceptions import ValidationError
from django.http import HttpResponseRedirect
import sys 

# Create your views here.


def add_song(request):
    title = "Add a new song"
    if request.method == 'POST':
        # POST, generate form with data from the request
        form = forms.SongForm(request.POST)
        # Call is_valid() to validate data and create cleaned_data and errors dict
        if form.is_valid():
            # Extract form values
            song_title = form.cleaned_data['title']
            artists = form.cleaned_data['artists']
            album = form.cleaned_data['album']
            genre = forms.GENRES[int(form.cleaned_data['genre'])][1]
            year = form.cleaned_data['year']
            album_image = form.cleaned_data['album_image']

            try:
                models.create_process(song_title, artists, album, genre, year, album_image)
                action = 'POST_SUCCESSFULL'
            except ValidationError as err:
                for err in err.messages:
                    form.add_error(None, err)
                action = 'POST_FAILED'
            except:
                print("Unexpected error: " + sys.exc_info()[0])
                form.add_error(None,'Unexpected error - Please contact your system administrator')
                action = 'POST_FAILED'
        else:
            action = 'POST_FAILED'
    else:
        action = 'GET'
        form = forms.SongForm(auto_id=False, initial={
                              'album_image': 'http://'})
    return render(request, 'song/song_form.html', {'action': action, 'form': form, 'title': title})

def fetch_all_songs(request):
    song_dict = models.fetch_all_songs_process()
    
    return render(request, 'homepage.html', {'song_dict': song_dict})

def edit_song(request):
    id = request.POST.get('id','')

    # If id doesn't exist, redirect to the homepage
    if(id == ''):
        return HttpResponseRedirect('/')
    
    title = "Edit song"
    # Create an empty form so that Django doesn't complaint
    form = forms.SongForm()

    if('popup' in id):
        action = ''

        # Clean up the id
        id = id.replace('popup','')

        try:
            # Fetch the song from the DB based on the given id, and then populate the fields 
            song = models.fetch_song_process(id)
            form = forms.SongForm(auto_id=False, initial={'id':song.id,'title':song.title,
            'artists':song.artists,'album':song.album,'genre':forms.searchGenresForKey(song.genre),
            'year':song.year,'album_image': song.album_image})
        except ValidationError as err:
            for err in err.messages:
                form.add_error(None, err)
            action = 'ERROR'
        except:
            print('Unexpected error: ' + str(sys.exc_info()[0]))
            action = 'ERROR'
    else:
        form = forms.SongForm(request.POST)
        # Call is_valid() to validate data and create cleaned_data and errors dict
        if form.is_valid():
            # Extract form values
            song_title = form.cleaned_data['title']
            artists = form.cleaned_data['artists']
            album = form.cleaned_data['album']
            genre = forms.GENRES[int(form.cleaned_data['genre'])][1]
            year = form.cleaned_data['year']
            album_image = form.cleaned_data['album_image']

            try:
                models.edit_process(id, song_title, artists, album, genre, year, album_image)
                action = 'EDIT_SUCCESSFULL'
            except ValidationError as err:
                for err in err.messages:
                    form.add_error(None, err)
                action = 'ERROR'
            except:
                print("Unexpected error: " + sys.exc_info()[0])
                form.add_error(None,'Unexpected error - Please contact your system administrator')
                action = 'ERROR'
        else:
            action = 'ERROR'

    return render(request, 'song/edit_song_form.html', {'action': action, 'form': form, 'title': title})

def delete_song(request):

    id = request.POST.get('id','')
    if(id == ''):
        return HttpResponseRedirect('/')
    else:
        id = id.replace('popup','')

    try:
        models.delete_process(id)
    except:
        print("Unexpected error: " + sys.exc_info()[0])

    return HttpResponseRedirect('/')