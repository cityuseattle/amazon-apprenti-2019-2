from django.urls import include
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin
from musicstore.song_mgt import views as song_views

# For debugging purposes
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', song_views.fetch_all_songs),
    url(r'^payment/', include('musicstore.payment.urls',namespace="payment_ns")),
    url(r'^events/', include('musicstore.events.urls',namespace="events_ns")),
    url(r'^song_mgt/', include('musicstore.song_mgt.urls',namespace="song_mgt_ns")),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]

    