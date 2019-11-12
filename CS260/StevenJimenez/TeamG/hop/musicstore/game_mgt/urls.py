from django.conf.urls import url
from . import views

app_name = "game_mgt_ns"

urlpatterns = [
    url(r'^$', views.add_game, name="addgame"),
]