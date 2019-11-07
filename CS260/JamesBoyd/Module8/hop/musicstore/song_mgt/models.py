from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=30)
    artists = models.CharField(max_length=30)
    album = models.CharField(max_length=30)
    genre = models.CharField(max_length=30)
    year = models.IntegerField()
    album_image = models.URLField(max_length=1000)

    objects = models.Manager()

    class Meta: 
        unique_together = ['title','artists']

# def create_process(_title, _artist, _album, _genre, _year, _album_image):
#     song = Song(title=_title, artist=_artist, album=_album,
#                 genre=_genre, year=_year, album_image=_album_image)

# def fetch_all_songs_process():
#     # Return a dict of songs
#     return Song.objects.in_bulk()

#     # Validation - Ensure the instance valuew comply with those of the model definition
#     # Raise ValidationError if the test failed
#     song.full_clean()

#     # Create the record in the target database
#     song.save()
        