from django.conf.urls import url
from . import views

app_name = "event_ns"

urlpatterns = [
    url(r'^$', views.show_events, name="show_events"),
]