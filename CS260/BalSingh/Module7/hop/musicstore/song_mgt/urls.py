from django.conf.urls import url
from . import views

app_name = "song_mgt_ns"

urlpatterns = [
    url(r'^$', views.add_song, name="addsong"),
]
