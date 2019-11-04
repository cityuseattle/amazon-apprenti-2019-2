from django import forms
from datetime import date

GENRES = ((0, 'COuntry Music'), (1, 'Dubstep'), (2, 'Electronic Dance Music'),(3, 'Indie Rock'), (4, 'Rap Music'), (5, 'Other'))


class SongForm(forms.Form):
    title = forms.CharField()
    artists = forms.CharField()
    album = forms.CharField()
    genre = forms.ChoiceField(choices=GENRES)
    year = forms.IntegerField(min_value=1900, max_value=int(date.today().year))
    album_image = forms.URLField()

    field_order = ['title', 'genre', 'artists', 'album', 'year', 'album_image']