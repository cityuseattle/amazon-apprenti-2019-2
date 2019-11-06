from django.urls import include
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin

# MAIN URL
urlpatterns = [
    # POINTS TO APP METHOD, NOT TO DIRECTLY TO TEMPLATE
    url(r'^admin/', admin.site.urls),
    # POINTS DIRECTLY TO TEMPLATE
    url(r'^$',TemplateView.as_view(template_name='homepage.html')),
    # keyword include imports specific url file from appropriate apps folder to here
    url(r'^payment/', include('testproject.payment.urls',namespace="payment_ns")),
    url(r'^events/', include('testproject.events.urls',namespace="events_ns")),
]