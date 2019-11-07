from django.shortcuts import render
from . import forms

# Create your views here.
def add_song(request):
    title = "Add a new song"
    if request.method == 'POST':
        # POST, generate form with data from the request
        form = forms.SongForm(request.POST)
        # Reference is now a bound instance with user data sent in POST
        # Call is_valid() to validate data and create cleaned_data and errors dict
        if form.is_valid():
            action='POST_SUCCESSFULL'
            # Form data is valid, you can now access validated values in the cleaned_data dict
            # e.g. form.cleaned_data['title']
        else:
            action='POST_FAILED'
    else:
        action='GET'
        # Disable auto_id to prevent the form from generating verbose information.
        # Also, we set the initial value to the album image field
        form = forms.SongForm(auto_id=False,initial={'album_image':'http://'})
        # Reference is now an unbound (empty) form
    # Reference form instance (bound/unbound) is sent to template for rendering
    return render(request,'song/song_form.html',{'action':action,'form':form,'title':title})
