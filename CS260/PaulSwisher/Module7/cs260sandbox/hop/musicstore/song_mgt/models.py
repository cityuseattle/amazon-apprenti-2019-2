from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.CharField(max_length=30)
    artist = models.CharField(max_length=30)
    album = models.CharField(max_length=30)
    genre = models.CharField(max_length=30)
    year = models.IntegerField()
    album_image = models.URLField(max_length=1000)

class Meta:
    unique_together = ['title', 'artist']