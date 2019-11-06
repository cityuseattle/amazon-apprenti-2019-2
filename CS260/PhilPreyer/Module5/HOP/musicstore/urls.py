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
    url(r'^events/', include('musicstore.events.urls',namespace="events_ns")),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]

    