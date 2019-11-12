from django.urls import include
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin


# For debugging purposes
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',TemplateView.as_view(template_name='homepage.html')),
    url(r'^payment/', include('musicstore.payment.urls',namespace="payment_ns")),
    url(r'^about_us/', include('musicstore.about_us.urls',namespace="about_us_ns")),
    url(r'^song_mgt/', include('musicstore.game_mgt.urls',namespace="game_mgt_ns")),
]

