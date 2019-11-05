from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=30)
    artists = models.CharField(max_length=30)
    album = models.CharField(max_length=30)
    genre = models.CharField(max_length=30)
    year = models.IntegerField()
    album_image = models.URLField(max_length=1000)

    class Meta: 
        unique_together = ['title','artists']

def create_process(_title, _artist, _album, _genre, _year, _album_image):
    song = Song(title=_title, artists=_artist, album=_album, genre=_genre, year=_year, album_image=_album_image)

    #Validation
    song.full_clean()

    #create the record in the target database
    song.save()

def fetch_all_songs_process():
    #return the songs
    return Song.objects.in_bulk()
        