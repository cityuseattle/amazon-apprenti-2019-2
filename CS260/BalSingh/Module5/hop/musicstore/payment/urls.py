from django.conf.urls import url
from . import views

app_name = "payment_ns"

urlpatterns = [
    url(r'^$', views.pay, name="pay"),
    url(r'^help/$', views.help, name="help"),
    url(r'^refund/$', views.refund, name="refund"),
    url(r'^(?P<payment_type>\D+)/',
        views.pay, {'discount': '40'}, name="pay_detals"),
]
