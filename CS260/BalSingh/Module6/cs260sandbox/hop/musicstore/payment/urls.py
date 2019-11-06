from django.conf.urls import url
from . import views

app_name = "payment_ns"

urlpatterns = [
    url(r'^$', views.pay, name="pay"),
    url(r'^help/$', views.help, name="help"),
    url(r'^add_pmt/$', views.add_payment, name="add_pmt")
]
