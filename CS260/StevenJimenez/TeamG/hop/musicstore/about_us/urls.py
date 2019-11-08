from django.conf.urls import url
from . import views

app_name = "about__us_ns"

urlpatterns = [
    url(r'^$', views.about_us, name="about_us"),
]
