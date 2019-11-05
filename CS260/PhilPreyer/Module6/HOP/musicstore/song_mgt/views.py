from django.shortcuts import render
from . import forms

# Create your views here.
def add_song(request):
    title = "Add a new song"
    if request.method == 'POST':
        # POST, generate form
        form = forms.SongForm(request.POST)
        # Reference is now a bound instance
        # Call is_valid()
        if form.is_valid():
            action='POST_SUCCESFULL'
            # Form data is valid
            #e.g. form.cleaned_data['title']
        else:
            action="POST_FAILED"
    else:
        action='GET'
        # Disable auto_id
        #Also, we set the initial value
        form = forms.SongForm(auto_id=False, initial={'album_image':'http://'})
        # Refernece is now inbound
    # Reference from instance
    return render(request, 'song/song_form.html', {'action':action,'form':form, 'title':title})

