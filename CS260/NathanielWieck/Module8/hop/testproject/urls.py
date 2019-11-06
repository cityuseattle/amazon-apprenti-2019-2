from django.urls import include
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin
from testproject.song_mgt import views as song_views

# dubugging
from django.conf import settings

# MAIN URL
urlpatterns = [
    # POINTS TO APP METHOD, NOT TO DIRECTLY TO TEMPLATE
    url(r'^admin/', admin.site.urls),
    url(r'^$', song_views.fetch_all_songs),
    # keyword include imports specific url file from appropriate apps folder to here
    url(r'^payment/', include('testproject.payment.urls',namespace="payment_ns")),
    url(r'^events/', include('testproject.events.urls',namespace="events_ns")),
    url(r'^song_mgt/', include('testproject.song_mgt.urls',namespace="song_mgt_ns")),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]