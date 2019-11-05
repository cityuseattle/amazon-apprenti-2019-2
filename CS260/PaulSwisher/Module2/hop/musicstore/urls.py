#!/usr/bin/python3

from django.urls import include
from django.conf.urls import include 
from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib import admin

# from testproject.payment import views as payment_views
# from musicstore.payment import views as payment_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',TemplateView.as_view(template_name='homepage.html')),
    url(r'^payment/', include('musicstore.payment.urls',namespace='payment_ns')),
#     url(r'^payment/help$', payment_views.help),
#     url(r'^payment/(?P<payment_type>\D+)/', payment_views.pay, {'discount':'40'}),
]
